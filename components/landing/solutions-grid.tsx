"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const solutions = [
  {
    title: "Obra Chave na Mão",
    badge: "Execução Integral",
    desc: "Gerenciamento 360° do seu projeto. Do terreno bruto à entrega das chaves, cuidando de fundações, alvenaria, instalações e acabamento fino.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=900&auto=format&fit=crop",
    features: ["Cronograma blindado", "Gestão de fornecedores", "RDOs em tempo real"],
  },
  {
    title: "Ateliê de Porcelanato",
    badge: "Design Exclusivo",
    desc: "Cortes e montagem de bancadas, ilhas e nichos de grandes formatos. Acabamento fino de meia-esquadria com durabilidade superior à pedra natural.",
    image:
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=900&auto=format&fit=crop",
    features: ["Medição a laser no local", "Impermeabilização total", "Peças contínuas"],
  },
  {
    title: "Infraestrutura & Andaimes",
    badge: "Locação & Projetos",
    desc: "Fornecimento ágil de andaimes tubulares certificados para trabalho em altura, junto a suporte de projetos arquitetônicos e cálculos urbanísticos.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d0fbb180c5f2?q=80&w=900&auto=format&fit=crop",
    features: ["Montagem rápida", "Laudo de segurança", "Disponibilidade imediata"],
  },
];

export function SolutionsGrid() {
  return (
    <section id="solucoes" className="relative bg-neutral-950 text-white py-28 md:py-36 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white leading-tight">
              Soluções Sob Medida.
            </h2>
            <p className="mt-3 text-base text-neutral-400 max-w-lg leading-relaxed">
              Modelos flexíveis estruturados para atender construtores, arquitetos e proprietários exigentes.
            </p>
          </div>
        </div>

        {/* Editorial aspect-[2/3] Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((sol) => (
            <div
              key={sol.title}
              className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-neutral-900/50 p-6 transition-all duration-500 hover:border-white/30"
            >
              <div>
                <div className="relative aspect-[4/3] sm:aspect-[2/3] w-full overflow-hidden rounded-xl bg-neutral-800">
                  <Image
                    src={sol.image}
                    alt={sol.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-block px-3 py-1 text-xs font-mono uppercase tracking-wider rounded-full bg-black/60 backdrop-blur-md text-white border border-white/15">
                      {sol.badge}
                    </span>
                  </div>
                </div>

                <div className="pt-6">
                  <h3 className="text-2xl font-medium text-white tracking-tight">
                    {sol.title}
                  </h3>
                  <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                    {sol.desc}
                  </p>

                  <ul className="mt-6 space-y-2 text-xs font-mono text-neutral-300">
                    {sol.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8 mt-auto border-t border-white/5">
                <a
                  href="https://wa.me/5538999999999?text=Ol%C3%A1%2C%20gostaria%20de%20consultar%20mais%20detalhes%20sobre%20essa%20solu%C3%A7%C3%A3o%20com%20a%20Elleve."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white hover:text-neutral-300 transition-colors"
                >
                  <span>Consultar Viabilidade</span>
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
