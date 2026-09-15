"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { ElleveLogo } from "@/components/ui/elleve-logo";

const TOTAL_FRAMES = 124;
const brandPillars = ["PLANEJAR", "CONSTRUIR", "ACOMPANHAR", "EVOLUIR"];

function getFramePath(index: number) {
  const padded = String(index).padStart(3, "0");
  return `/frames/frame_${padded}.webp`;
}

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const topAmbientRef = useRef<HTMLDivElement>(null);
  const centerBrandRef = useRef<HTMLDivElement>(null);
  const bottomContentRef = useRef<HTMLDivElement>(null);
  const nextSectionCueRef = useRef<HTMLDivElement>(null);
  const progressTextRef = useRef<HTMLSpanElement>(null);

  const imagesRef = useRef<HTMLImageElement[]>([]);
  const loadedMapRef = useRef<boolean[]>(new Array(TOTAL_FRAMES + 1).fill(false));
  const currentProgressRef = useRef<number>(0);
  const targetProgressRef = useRef<number>(0);
  const lastDrawnFrameRef = useRef<number>(-1);
  const isRunningRef = useRef<boolean>(false);

  // Preload frames progressively
  useEffect(() => {
    const images: HTMLImageElement[] = [];

    // Load first frame with high priority
    const firstImg = new Image();
    firstImg.src = getFramePath(1);
    firstImg.onload = () => {
      loadedMapRef.current[1] = true;
      drawFrame(1);
    };
    images[1] = firstImg;

    // Preload remaining frames
    for (let i = 2; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      img.onload = () => {
        loadedMapRef.current[i] = true;
      };
      images[i] = img;
    }

    imagesRef.current = images;
  }, []);

  // Draw a frame covering the entire canvas (like object-cover)
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let img = imagesRef.current[frameIndex];

    // If frame is still loading, find nearest loaded frame
    if (!img || !loadedMapRef.current[frameIndex]) {
      for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
        const prev = frameIndex - offset;
        const next = frameIndex + offset;
        if (prev >= 1 && loadedMapRef.current[prev]) {
          img = imagesRef.current[prev];
          break;
        }
        if (next <= TOTAL_FRAMES && loadedMapRef.current[next]) {
          img = imagesRef.current[next];
          break;
        }
      }
    }

    if (!img || !img.complete || img.naturalWidth === 0) return;

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const imgWidth = img.naturalWidth;
    const imgHeight = img.naturalHeight;

    const imgRatio = imgWidth / imgHeight;
    const canvasRatio = canvasWidth / canvasHeight;

    let renderWidth = canvasWidth;
    let renderHeight = canvasHeight;
    let renderX = 0;
    let renderY = 0;

    if (canvasRatio > imgRatio) {
      renderHeight = canvasWidth / imgRatio;
      renderY = (canvasHeight - renderHeight) / 2;
    } else {
      renderWidth = canvasHeight * imgRatio;
      renderX = (canvasWidth - renderWidth) / 2;
    }

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(img, renderX, renderY, renderWidth, renderHeight);
    lastDrawnFrameRef.current = frameIndex;
  }, []);

  // Smooth lerp loop decoupled from React state
  const startRenderLoop = useCallback(() => {
    if (isRunningRef.current) return;
    isRunningRef.current = true;

    const tick = () => {
      // Lerp target to current for silky smooth feel
      const diff = targetProgressRef.current - currentProgressRef.current;
      currentProgressRef.current += diff * 0.2;

      const progress = currentProgressRef.current;

      // Calculate frame index (1 to TOTAL_FRAMES)
      const frameIdx = Math.min(
        Math.max(Math.round(progress * (TOTAL_FRAMES - 1)) + 1, 1),
        TOTAL_FRAMES
      );

      if (frameIdx !== lastDrawnFrameRef.current) {
        drawFrame(frameIdx);
      }

      // Direct DOM updates for zero React re-render overhead
      if (topAmbientRef.current) {
        const op = Math.max(0, 1 - progress * 2.5);
        topAmbientRef.current.style.opacity = String(op);
        topAmbientRef.current.style.transform = `translateY(${-progress * 80}px)`;
      }

      if (centerBrandRef.current) {
        const op = Math.max(0, 1 - progress * 2.2);
        centerBrandRef.current.style.opacity = String(op);
        centerBrandRef.current.style.transform = `translateY(${-progress * 60}px) scale(${1 - progress * 0.1})`;
      }

      if (bottomContentRef.current) {
        const op = progress < 0.85 ? Math.max(0, 1 - progress * 1.6) : 0;
        bottomContentRef.current.style.opacity = String(op);
        bottomContentRef.current.style.transform = `translateY(${progress * 30}px)`;
      }

      if (nextSectionCueRef.current) {
        const op = progress > 0.85 ? (progress - 0.85) / 0.15 : 0;
        nextSectionCueRef.current.style.opacity = String(op);
      }

      if (progressTextRef.current) {
        progressTextRef.current.textContent = `${Math.round(progress * 100)}%`;
      }

      // Keep running if there's momentum or active scrolling
      if (Math.abs(diff) > 0.0005) {
        requestAnimationFrame(tick);
      } else {
        currentProgressRef.current = targetProgressRef.current;
        isRunningRef.current = false;
      }
    };

    requestAnimationFrame(tick);
  }, [drawFrame]);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
      if (totalScrollable <= 0) return;

      const currentScroll = -rect.top;
      const progress = Math.min(Math.max(currentScroll / totalScrollable, 0), 1);
      targetProgressRef.current = progress;

      startRenderLoop();
    };

    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      // Redraw current frame
      const progress = currentProgressRef.current;
      const frameIdx = Math.min(
        Math.max(Math.round(progress * (TOTAL_FRAMES - 1)) + 1, 1),
        TOTAL_FRAMES
      );
      drawFrame(frameIdx);
    };

    handleResize();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [startRenderLoop, drawFrame]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative w-full bg-ink text-cream"
      style={{ height: "300vh" }}
    >
      {/* Sticky Hero Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between">
        {/* Canvas for 120fps Buttery Smooth Scrubbing */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full object-cover z-0 filter brightness-[0.75] contrast-[1.08]"
        />

        {/* Cinematic Vignette */}
        <div className="absolute inset-0 z-1 pointer-events-none bg-radial-[at_center_center] from-transparent via-black/40 to-ink/90" />

        {/* Top Ambient Header Bar with Official Brand Pillars */}
        <div
          ref={topAmbientRef}
          className="relative z-10 pt-24 px-6 md:px-12 max-w-7xl mx-auto w-full flex items-start justify-between pointer-events-none transition-transform will-change-transform"
        >
          {/* Official Elleve Squircle Badge */}
          <div className="hidden sm:block">
            <ElleveLogo variant="badge" subtitle={true} theme="dark" />
          </div>

          {/* Official Brand Pillars from Elleve Posts */}
          <div className="flex items-center gap-2 font-mono text-[10px] md:text-[11px] text-cream/70 tracking-[0.22em] border-l border-cream/20 pl-4 py-1">
            <div className="flex flex-col space-y-0.5">
              {brandPillars.map((p) => (
                <span key={p} className="hover:text-cream transition-colors">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Center Monumental Brand Mark: elleve. */}
        <div
          ref={centerBrandRef}
          className="relative z-10 text-center pointer-events-none my-auto transition-transform will-change-transform"
        >
          <ElleveLogo variant="hero" subtitle={true} />
        </div>

        {/* Center/Bottom Narrative Content formatted with official Elleve text behavior */}
        <div
          ref={bottomContentRef}
          className="relative z-10 pb-12 px-6 max-w-4xl mx-auto w-full text-center flex flex-col items-center transition-transform will-change-transform"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-cream/40" />
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-cream/80">
              Arquitetura · Urbanismo · Engenharia Civil
            </span>
            <span className="h-px w-6 bg-cream/40" />
          </div>

          {/* Main Title structured in authentic Elleve design */}
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-cream max-w-3xl leading-[1.08]">
            Projetos que <br className="hidden sm:inline" />
            <span className="font-medium text-white">transformam </span>
            <span className="italic font-light text-cream">realidades.</span>
          </h1>

          <p className="mt-4 font-sans text-sm sm:text-base text-cream/80 max-w-2xl leading-relaxed">
            Da concepção à entrega de alto padrão: unimos técnica, estética milimétrica em porcelanato e tecnologia de ponta para você acompanhar tudo sem sair de casa.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/5538999999999?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20o%20meu%20projeto%20com%20a%20Elleve."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-cream text-ink font-display font-semibold text-xs uppercase tracking-wider hover:opacity-90 transition-all active:scale-95 shadow-2xl"
            >
              <span>Solicitar Orçamento do Meu Projeto</span>
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Scroll progress cue */}
          <div className="mt-6 flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-cream/60 animate-pulse">
            <ArrowDown size={13} />
            <span>
              Role para avançar (<span ref={progressTextRef}>0%</span>)
            </span>
          </div>
        </div>

        {/* Section transition cue at the end */}
        <div
          ref={nextSectionCueRef}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-center transition-opacity opacity-0 pointer-events-none"
        >
          <p className="text-[11px] uppercase tracking-[0.25em] text-cream/90 font-mono">
            Continue rolando para explorar
          </p>
          <ArrowDown size={15} className="mx-auto mt-1.5 text-cream animate-bounce" />
        </div>
      </div>
    </section>
  );
}
