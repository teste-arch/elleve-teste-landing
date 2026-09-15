"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { ElleveLogo } from "@/components/ui/elleve-logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-5xl transition-all duration-500 ${
        scrolled
          ? "bg-ink/80 backdrop-blur-xl border border-cream/15 shadow-2xl py-2.5 px-6 rounded-full"
          : "bg-transparent py-4 px-2"
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Official Brand Logo */}
        <Link
          href="#hero"
          className="transition-opacity hover:opacity-90 flex items-center"
        >
          <ElleveLogo variant="wordmark" subtitle={true} theme="dark" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-wider font-mono text-cream/70">
          <Link
            href="#ecossistema"
            className="transition-colors hover:text-cream"
          >
            Ecossistema
          </Link>
          <Link
            href="#servicos"
            className="transition-colors hover:text-cream"
          >
            Obras
          </Link>
          <Link
            href="#porcelanato"
            className="transition-colors hover:text-cream"
          >
            Porcelanato
          </Link>
          <Link
            href="#tecnologia"
            className="transition-colors hover:text-cream"
          >
            Plataforma
          </Link>
          <Link
            href="#portfolio"
            className="transition-colors hover:text-cream"
          >
            Portfólio
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://wa.me/5538999999999?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20o%20meu%20projeto%20com%20a%20Elleve."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-display font-semibold uppercase tracking-wider rounded-full bg-cream text-ink transition-all duration-300 hover:opacity-90 active:scale-95 shadow-md"
          >
            <span>Solicitar Orçamento</span>
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-cream md:hidden transition-colors"
          aria-label="Abrir menu de navegação"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mt-3 rounded-2xl bg-ink/95 backdrop-blur-2xl border border-cream/15 p-6 md:hidden flex flex-col gap-4 text-center">
          <Link
            href="#ecossistema"
            onClick={() => setMobileMenuOpen(false)}
            className="text-xs uppercase tracking-wider font-mono text-cream/80 hover:text-cream py-1"
          >
            Ecossistema
          </Link>
          <Link
            href="#servicos"
            onClick={() => setMobileMenuOpen(false)}
            className="text-xs uppercase tracking-wider font-mono text-cream/80 hover:text-cream py-1"
          >
            Obras & Engenharia
          </Link>
          <Link
            href="#porcelanato"
            onClick={() => setMobileMenuOpen(false)}
            className="text-xs uppercase tracking-wider font-mono text-cream/80 hover:text-cream py-1"
          >
            Arte em Porcelanato
          </Link>
          <Link
            href="#tecnologia"
            onClick={() => setMobileMenuOpen(false)}
            className="text-xs uppercase tracking-wider font-mono text-cream/80 hover:text-cream py-1"
          >
            Canteiro Transparente
          </Link>
          <Link
            href="#portfolio"
            onClick={() => setMobileMenuOpen(false)}
            className="text-xs uppercase tracking-wider font-mono text-cream/80 hover:text-cream py-1"
          >
            Portfólio
          </Link>
          <a
            href="https://wa.me/5538999999999?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20o%20meu%20projeto%20com%20a%20Elleve."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 w-full py-2.5 text-xs font-display font-semibold uppercase tracking-wider rounded-full bg-cream text-ink text-center flex items-center justify-center gap-1.5"
          >
            <span>Solicitar Orçamento</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      )}
    </header>
  );
}
