"use client";

import Image from "next/image";
import { Hammer, Sparkles, Compass, ShieldCheck } from "lucide-react";

export function BentoServices() {
  return (
    <section id="servicos" className="relative bg-ink text-cream py-24 md:py-32 border-t border-cream/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-cream/60 mb-2 block">
            Engenharia & Arquitetura de Alto Padrão
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-light tracking-tight text-cream leading-tight">
            O Coração do <span className="font-medium text-white">Nosso Trabalho.</span>
          </h2>
          <p className="mt-4 font-sans text-base text-cream/80 leading-relaxed">
            Mais que obras, legados para o futuro. Da concepção à entrega, unimos técnica rigorosa, estética e propósito para criar espaços que inspiram e permanecem.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[360px]">
          {/* Card 1: Execução de Obras com a imagem oficial de arquitetura Elleve (Col span 2) */}
          <div className="group relative overflow-hidden rounded-2xl border border-cream/15 bg-card p-8 flex flex-col justify-between md:col-span-2 transition-all duration-500 hover:border-cream/35">
            <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-50 transition-opacity duration-700">
              <Image
                src="/images/elleve-arquitetura.jpg"
                alt="Execução de Obras e Arquitetura Elleve"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-ink/70 px-3 py-1 text-xs font-mono text-cream backdrop-blur-sm">
                <Hammer size={13} className="text-cream" />
                <span>Do Zero à Chave na Mão</span>
              </div>
            </div>

            <div className="relative z-10">
              <h3 className="font-display text-2xl md:text-3xl font-medium tracking-tight text-white">
                Execução de Obras Completas
              </h3>
              <p className="mt-2 font-sans text-sm text-cream/85 max-w-xl leading-relaxed">
                Gerenciamento rigoroso para obras residenciais e comerciais. Nossa equipe técnica de campo garante cumprimento de prazos, normas estruturais e orçamento sem surpresas.
              </p>
            </div>
          </div>

          {/* Card 2: Arte e Acabamento em Porcelanato (Col span 1) */}
          <div className="group relative overflow-hidden rounded-2xl border border-cream/25 bg-card p-8 flex flex-col justify-between md:col-span-1 transition-all duration-500 hover:border-cream/45 shadow-2xl">
            <div className="absolute inset-0 z-0 opacity-45 group-hover:opacity-55 transition-opacity duration-700">
              <Image
                src="/images/elleve-porcelanatos.jpg"
                alt="Bancadas esculpidas em porcelanato Elleve"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-transparent" />
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-cream/30 bg-cream/15 px-3 py-1 text-xs font-mono text-cream backdrop-blur-sm">
                <Sparkles size={13} />
                <span>Carro-Chefe</span>
              </div>
            </div>

            <div className="relative z-10">
              <h3 className="font-display text-2xl font-medium tracking-tight text-white">
                Arte em Porcelanato
              </h3>
              <p className="mt-2 font-sans text-sm text-cream/85 leading-relaxed">
                Bancadas esculpidas, nichos contínuos, ilhas gourmet e escadas com corte a 45° e quina de acabamento invisível.
              </p>
            </div>
          </div>

          {/* Card 3: Arquitetura e Urbanismo (Col span 1) */}
          <div className="group relative overflow-hidden rounded-2xl border border-cream/15 bg-card p-8 flex flex-col justify-between md:col-span-1 transition-all duration-500 hover:border-cream/35">
            <div className="absolute inset-0 z-0 opacity-25 group-hover:opacity-35 transition-opacity duration-700">
              <Image
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop"
                alt="Projetos de Arquitetura e Urbanismo"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-transparent" />
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-ink/70 px-3 py-1 text-xs font-mono text-cream backdrop-blur-sm">
                <Compass size={13} />
                <span>Concepção</span>
              </div>
            </div>

            <div className="relative z-10">
              <h3 className="font-display text-xl font-medium tracking-tight text-white">
                Arquitetura & Urbanismo
              </h3>
              <p className="mt-2 font-sans text-sm text-cream/70 leading-relaxed">
                Antes de erguer a fundação, desenhamos o futuro. Soluções inteligentes que integram estética funcional e respeito ambiental.
              </p>
            </div>
          </div>

          {/* Card 4: Locação de Andaimes e Estruturas (Col span 2) */}
          <div className="group relative overflow-hidden rounded-2xl border border-cream/15 bg-card p-8 flex flex-col justify-between md:col-span-2 transition-all duration-500 hover:border-cream/35">
            <div className="absolute inset-0 z-0 opacity-25 group-hover:opacity-35 transition-opacity duration-700">
              <Image
                src="https://images.unsplash.com/photo-1541888946425-d0fbb180c5f2?q=80&w=1200&auto=format&fit=crop"
                alt="Andaimes tubulares e infraestrutura de obra"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-transparent" />
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-ink/70 px-3 py-1 text-xs font-mono text-cream backdrop-blur-sm">
                <ShieldCheck size={13} />
                <span>Infraestrutura Sob Demanda</span>
              </div>
            </div>

            <div className="relative z-10">
              <h3 className="font-display text-2xl font-medium tracking-tight text-white">
                Locação de Andaimes & Estruturas
              </h3>
              <p className="mt-2 font-sans text-sm text-cream/80 max-w-xl leading-relaxed">
                Segurança e agilidade no canteiro. Andaimes tubulares e equipamentos de apoio com montagem rápida e certificação técnica para obras exigentes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
