"use client";

import { MessageSquare, Mail, MapPin, ArrowUpRight, UserCheck, Ruler, ShieldCheck, Truck } from "lucide-react";
import { ElleveLogo } from "@/components/ui/elleve-logo";

const trustBadges = [
  { icon: UserCheck, label: "Atendimento Personalizado" },
  { icon: Ruler, label: "Projetos Sob Medida" },
  { icon: ShieldCheck, label: "Qualidade em Cada Detalhe" },
  { icon: Truck, label: "Entrega Segura" },
];

export function CTASection() {
  return (
    <section id="contato" className="relative bg-ink text-cream py-28 md:py-36 border-t border-cream/15">
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
        {/* Official Badge */}
        <div className="flex justify-center mb-8">
          <ElleveLogo variant="badge" subtitle={true} theme="dark" />
        </div>

        <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-cream leading-tight">
          Seu projeto <span className="font-medium text-white">em boas mãos.</span>
        </h2>

        <p className="mt-4 font-sans text-base sm:text-lg text-cream/80 max-w-2xl mx-auto leading-relaxed">
          Transforme seus ambientes com a sofisticação da engenharia e a arte do porcelanato esculpido. Fale diretamente com nossos engenheiros e arquitetos em Lassance, MG.
        </p>

        {/* 4 Trust Badges from Official Post */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10 max-w-4xl mx-auto text-left sm:text-center">
          {trustBadges.map((b) => (
            <div
              key={b.label}
              className="p-4 rounded-xl border border-cream/10 bg-[#151515] flex items-center justify-center gap-2.5 text-xs font-mono text-cream/90"
            >
              <b.icon size={16} className="text-cream shrink-0" />
              <span>{b.label}</span>
            </div>
          ))}
        </div>

        {/* Big Conversion CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/5538999999999?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista%20da%20Elleve%20Construtora%20sobre%20o%20meu%20projeto."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-4 rounded-full bg-cream text-ink font-display font-semibold text-xs uppercase tracking-wider hover:opacity-90 transition-all duration-300 active:scale-95 shadow-2xl flex items-center justify-center gap-2.5"
          >
            <MessageSquare size={16} />
            <span>Falar com Nossa Equipe no WhatsApp</span>
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Contact Info Pills */}
        <div className="mt-16 pt-10 border-t border-cream/10 grid grid-cols-1 md:grid-cols-3 gap-6 text-cream/70 text-xs font-mono">
          <div className="flex items-center justify-center gap-2 p-3.5 rounded-xl bg-[#141414] border border-cream/10">
            <MapPin size={15} className="text-cream" />
            <span>Lassance, MG</span>
          </div>

          <div className="flex items-center justify-center gap-2 p-3.5 rounded-xl bg-[#141414] border border-cream/10">
            <Mail size={15} className="text-cream" />
            <span>contato@elleveconstrutora.com.br</span>
          </div>

          <div className="flex items-center justify-center gap-2 p-3.5 rounded-xl bg-[#141414] border border-cream/10">
            <MessageSquare size={15} className="text-cream" />
            <span>Atendimento em Todo o Estado</span>
          </div>
        </div>
      </div>
    </section>
  );
}
