"use client";

import { useRef, useState, useEffect } from "react";

const rotatingHeadlines = [
  "Execução Rigorosa.",
  "Arte em Porcelanato.",
  "Transparência Absoluta.",
];

export function PhilosophySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeHeadlineIndex, setActiveHeadlineIndex] = useState(0);

  useEffect(() => {
    let rafId: number | null = null;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      if (total <= 0) return;

      const progress = Math.min(Math.max(-rect.top / total, 0), 1);
      const index = Math.min(
        Math.floor(progress * rotatingHeadlines.length),
        rotatingHeadlines.length - 1
      );

      setActiveHeadlineIndex((prev) => (prev !== index ? index : prev));
    };

    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const statementText =
    "Nós eliminamos a complexidade da construção civil. Da prancheta do arquiteto até o aluguel da estrutura de montagem e o corte milimétrico da sua bancada de porcelanato. Uma única equipe responsável pelo seu sucesso.";

  const words = statementText.split(" ");

  return (
    <section id="ecossistema" ref={containerRef} className="relative bg-ink text-cream">
      {/* 3D Rotating Sticky Perspective Track */}
      <div className="relative h-[220vh]">
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden px-4">
          <div className="w-full max-w-6xl text-center" style={{ perspective: "1000px" }}>
            <div
              className="relative w-full flex items-center justify-center"
              style={{ minHeight: "180px", transformStyle: "preserve-3d" }}
            >
              {rotatingHeadlines.map((headline, idx) => {
                const isActive = idx === activeHeadlineIndex;
                return (
                  <h2
                    key={headline}
                    className={`absolute inset-0 flex items-center justify-center font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-cream transition-all duration-700 select-none ${
                      isActive
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-90 translate-y-12 pointer-events-none"
                    }`}
                  >
                    {headline}
                  </h2>
                );
              })}
            </div>

            <p className="text-xs uppercase tracking-[0.25em] text-cream/50 mt-6 font-mono">
              O Ecossistema Completo Elleve
            </p>
          </div>
        </div>
      </div>

      {/* Narrative Manifest with Editorial Spacing */}
      <div className="px-6 py-28 md:px-12 md:py-36 lg:px-20 max-w-5xl mx-auto text-center border-t border-cream/10">
        <h3 className="font-sans text-2xl sm:text-3xl md:text-4xl font-light text-cream/90 tracking-tight leading-relaxed">
          {words.map((word, i) => (
            <span
              key={i}
              className="inline-block transition-all duration-300 mr-2 text-cream hover:text-white"
            >
              {word}
            </span>
          ))}
        </h3>
      </div>
    </section>
  );
}
