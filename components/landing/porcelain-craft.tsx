"use client";

import Image from "next/image";
import {
  Diamond,
  Droplets,
  Sparkles,
  Leaf,
  Layers,
  ShieldCheck,
  Sliders,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

// Official 8 Porcelanato Pieces Catalog from Elleve Post
const piecesCatalog = [
  {
    title: "Nichos",
    desc: "Organização e elegância em cada detalhe.",
    tag: "Banheiros & Suítes",
  },
  {
    title: "Pias de Banheiro",
    desc: "Beleza e funcionalidade no seu dia a dia.",
    tag: "Design Exclusivo",
  },
  {
    title: "Bancadas",
    desc: "Para cozinhas, banheiros, áreas gourmet e muito mais.",
    tag: "Gourmet & Ilhas",
  },
  {
    title: "Lavatórios Esculpidos",
    desc: "Peças exclusivas, alto padrão de acabamento.",
    tag: "Corte 45°",
  },
  {
    title: "Escadas",
    desc: "Imponência e continuidade no seu projeto.",
    tag: "Grandes Formatos",
  },
  {
    title: "Revestimentos",
    desc: "Paredes que transformam ambientes.",
    tag: "Painéis Contínuos",
  },
  {
    title: "Móveis Sob Medida",
    desc: "Integração e modernidade com porcelanato.",
    tag: "Mobiliário Nobre",
  },
  {
    title: "Projetos Personalizados",
    desc: "Do seu estilo, do seu jeito.",
    tag: "Sob Medida",
  },
];

// Official 5 Benefits from Elleve Post
const benefits = [
  { icon: Diamond, title: "Alta Durabilidade", desc: "Resistência estrutural superior a pedras naturais." },
  { icon: Droplets, title: "Resistente a Manchas", desc: "Baixa porosidade, não absorve gorduras nem líquidos." },
  { icon: Sparkles, title: "Fácil Limpeza", desc: "Superfície contínua, assepsia imediata sem esforço." },
  { icon: Sliders, title: "Personalização Total", desc: "Medidas milimétricas e cortes de 45° perfeitos." },
  { icon: Leaf, title: "Beleza que Valoriza", desc: "Estética atemporal que valoriza o imóvel no longo prazo." },
];

export function PorcelainCraft() {
  return (
    <section id="porcelanato" className="relative bg-[#0D0D0D] text-cream py-28 md:py-36 border-t border-cream/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Top Header structured in Elleve design */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-cream/60 mb-3 block">
              Nosso Carro-Chefe · Design em Porcelanato
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-cream leading-tight">
              Porcelanato <br />
              <span className="font-medium text-white">em novas formas.</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="font-sans text-base text-cream/80 leading-relaxed">
              Sofisticação, durabilidade e personalização para ambientes únicos. Cortamos, esculpimos e montamos porcelanatos de grande formato com acabamento invisível de meia-esquadria.
            </p>
          </div>
        </div>

        {/* 4 Brand Pillars for Porcelanato */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {[
            { icon: Diamond, label: "Alta Resistência" },
            { icon: Droplets, label: "Baixa Absorção" },
            { icon: Sparkles, label: "Beleza Atemporal" },
            { icon: Leaf, label: "Mais Sustentável" },
          ].map((item) => (
            <div
              key={item.label}
              className="p-5 rounded-xl border border-cream/10 bg-ink/60 flex flex-col items-center text-center gap-2 hover:border-cream/25 transition-colors"
            >
              <item.icon size={20} className="text-cream/90" />
              <span className="font-mono text-xs uppercase tracking-wider text-cream/80 font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Hero Visual Display with official image */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-2xl overflow-hidden border border-cream/15 mb-20 group">
          <Image
            src="/images/elleve-porcelanatos.jpg"
            alt="Soluções em porcelanato para todos os ambientes Elleve"
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-black/30" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="bg-ink/80 backdrop-blur-md px-4 py-2 rounded-lg border border-cream/15">
              <p className="font-mono text-xs uppercase tracking-wider text-cream">
                Mais que acabamentos. Verdadeiras peças de design.
              </p>
            </div>
            <a
              href="https://wa.me/5538999999999?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20pe%C3%A7as%20de%20porcelanato."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cream text-ink font-display font-semibold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              <span>Conheça Nossas Peças</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>

        {/* Official 8 Pieces Catalog Grid */}
        <div className="mb-24">
          <div className="mb-10 text-center sm:text-left">
            <h3 className="font-display text-2xl sm:text-3xl font-light text-cream">
              Soluções em porcelanato <span className="font-medium text-white">para todos os ambientes.</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {piecesCatalog.map((piece) => (
              <div
                key={piece.title}
                className="p-6 rounded-2xl border border-cream/10 bg-ink/70 hover:border-cream/30 transition-all group flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-cream/60 block mb-2">
                    {piece.tag}
                  </span>
                  <h4 className="font-display text-xl font-medium text-cream group-hover:text-white transition-colors">
                    {piece.title}
                  </h4>
                  <p className="mt-2 text-sm text-cream/75 leading-relaxed">
                    {piece.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-cream/10 flex items-center justify-between text-xs font-mono text-cream/60">
                  <span>Corte a 45°</span>
                  <span className="text-emerald-400">Zero Emendas</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5 Reasons Strip */}
        <div className="p-8 sm:p-12 rounded-2xl border border-cream/15 bg-ink/90">
          <div className="text-center mb-10">
            <h3 className="font-display text-2xl sm:text-3xl font-medium text-cream">
              Por que escolher peças de porcelanato?
            </h3>
            <p className="font-sans text-sm text-cream/70 mt-2">
              Vantagens técnicas incomparáveis sobre o mármore e o granito.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full border border-cream/20 bg-cream/10 flex items-center justify-center mb-4 text-cream">
                  <b.icon size={20} />
                </div>
                <h4 className="font-display text-base font-medium text-cream mb-1">
                  {b.title}
                </h4>
                <p className="text-xs text-cream/70 leading-relaxed font-sans">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
