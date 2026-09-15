"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { ElleveLogo } from "@/components/ui/elleve-logo";

const brandPillars = ["PLANEJAR", "CONSTRUIR", "ACOMPANHAR", "EVOLUIR"];

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const rafIdRef = useRef<number | null>(null);

  // Synchronize video time with scroll progress
  const updateVideoTime = useCallback(() => {
    if (!containerRef.current || !videoRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;

    if (totalScrollable <= 0) return;

    // Progress from 0 (at the top of hero) to 1 (at the end of sticky hero)
    const currentScroll = -rect.top;
    const progress = Math.min(Math.max(currentScroll / totalScrollable, 0), 1);

    setScrollProgress(progress);

    const video = videoRef.current;
    if (video.duration && !isNaN(video.duration)) {
      const maxTime = Math.max(0, video.duration - 0.05);
      const targetTime = Math.min(Math.max(progress * video.duration, 0), maxTime);

      if (Math.abs(video.currentTime - targetTime) > 0.02) {
        if ("fastSeek" in video && typeof (video as any).fastSeek === "function") {
          try {
            (video as any).fastSeek(targetTime);
          } catch {
            video.currentTime = targetTime;
          }
        } else {
          video.currentTime = targetTime;
        }
      }
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      if (video.readyState >= 1) {
        setIsVideoLoaded(true);
        updateVideoTime();
      }
    }

    const onScroll = () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = requestAnimationFrame(updateVideoTime);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [updateVideoTime]);

  const onLoadedMetadata = () => {
    setIsVideoLoaded(true);
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.currentTime = 0;
      videoRef.current.pause();
    }
    updateVideoTime();
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative w-full bg-ink text-cream"
      style={{ height: "300vh" }}
    >
      {/* Sticky Hero Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between">
        {/* Background Video (Scrubbed by scroll, All-Intra 124 keyframes) */}
        <video
          ref={videoRef}
          src="/Elleve.mp4"
          muted
          playsInline
          preload="auto"
          onLoadedMetadata={onLoadedMetadata}
          onLoadedData={onLoadedMetadata}
          onCanPlay={onLoadedMetadata}
          className="absolute inset-0 h-full w-full object-cover z-0 filter brightness-[0.72] contrast-[1.08]"
        />

        {/* Cinematic Vignette */}
        <div className="absolute inset-0 z-1 pointer-events-none bg-radial-[at_center_center] from-transparent via-black/40 to-ink/90" />

        {/* Top Ambient Header Bar with Official Brand Pillars */}
        <div
          className="relative z-10 pt-24 px-6 md:px-12 max-w-7xl mx-auto w-full flex items-start justify-between transition-all duration-700 pointer-events-none"
          style={{
            opacity: Math.max(0, 1 - scrollProgress * 2.5),
            transform: `translateY(${-scrollProgress * 80}px)`,
          }}
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
          className="relative z-10 text-center transition-all duration-700 pointer-events-none my-auto"
          style={{
            opacity: Math.max(0, 1 - scrollProgress * 2.2),
            transform: `translateY(${-scrollProgress * 60}px) scale(${1 - scrollProgress * 0.1})`,
          }}
        >
          <ElleveLogo variant="hero" subtitle={true} />
        </div>

        {/* Center/Bottom Narrative Content formatted with official Elleve text behavior */}
        <div
          className="relative z-10 pb-12 px-6 max-w-4xl mx-auto w-full transition-all duration-500 text-center flex flex-col items-center"
          style={{
            opacity: scrollProgress < 0.85 ? Math.max(0, 1 - scrollProgress * 1.6) : 0,
            transform: `translateY(${scrollProgress * 30}px)`,
          }}
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
            <span>Role para avançar o vídeo ({Math.round(scrollProgress * 100)}%)</span>
          </div>
        </div>

        {/* Section transition cue */}
        {scrollProgress > 0.85 && (
          <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-center transition-all duration-500"
            style={{ opacity: (scrollProgress - 0.85) / 0.15 }}
          >
            <p className="text-[11px] uppercase tracking-[0.25em] text-cream/90 font-mono">
              Continue rolando para explorar
            </p>
            <ArrowDown size={15} className="mx-auto mt-1.5 text-cream animate-bounce" />
          </div>
        )}
      </div>
    </section>
  );
}
