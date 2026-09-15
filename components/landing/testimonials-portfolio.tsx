"use client";

import Image from "next/image";
import { Star, Quote } from "lucide-react";

const portfolioProjects = [
  {
    title: "Residencial Jardins",
    category: "Obra Chave na Mão",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Suíte Master Imperial",
    category: "Bancadas & Nichos Esculpidos",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Edifício Comercial Horizon",
    category: "Projetos & Estruturas",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb180c5f2?q=80&w=800&auto=format&fit=crop",
  },
];

const testimonials = [
  {
    quote:
      "A transparência com o RDO no WhatsApp mudou totalmente minha experiência. Pude acompanhar a concretagem e o assentamento das bancadas mesmo estando em viagem de negócios. Entrega impecável no prazo previsto.",
    author: "Dr. Marcelo F.",
    role: "Proprietário Residencial Jardins",
  },
  {
    quote:
      "A perfeição dos cortes de 45° no porcelanato da nossa cozinha gourmet impressionou todos os arquitetos que visitaram a casa. Não existe emenda aparente. Acabamento de altíssimo nível.",
    author: "Renata C. & Felipe M.",
    role: "Clientes de Porcelanaria sob Medida",
  },
];

export function TestimonialsPortfolio() {
  return (
    <section id="portfolio" className="relative bg-neutral-950 text-white py-28 md:py-36 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white leading-tight">
              Projetos Entregues.
            </h2>
            <p className="mt-3 text-base text-neutral-400 max-w-lg leading-relaxed">
              Obras residenciais e arte em porcelanato esculpido que atestam nosso compromisso com a perfeição construtiva.
            </p>
          </div>
        </div>

        {/* Portfolio Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-24">
          {portfolioProjects.map((p) => (
            <div
              key={p.title}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-neutral-900"
            >
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                  {p.category}
                </span>
                <h3 className="text-lg font-medium text-white tracking-tight mt-1">
                  {p.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl border border-white/10 bg-neutral-900/40 relative flex flex-col justify-between"
            >
              <div className="mb-6">
                <div className="flex gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="text-base sm:text-lg text-neutral-200 leading-relaxed font-light italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <p className="text-sm font-medium text-white">{t.author}</p>
                <p className="text-xs text-neutral-400">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
