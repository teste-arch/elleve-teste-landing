"use client";

import Image from "next/image";
import {
  HardHat,
  Users,
  Compass,
  Smartphone,
  Upload,
  Camera,
  MessageSquare,
  CheckCircle2,
  Clock,
  ShieldCheck,
  BarChart3,
  Layers,
} from "lucide-react";

// Official 4 Roles from Elleve Platform Post
const platformRoles = [
  {
    role: "ENGENHEIRO",
    icon: HardHat,
    actionIcon: Upload,
    actionTitle: "Upload de Projetos",
    actionSub: "Plantas, memoriais e documentos técnicos.",
    desc: "Adiciona projetos, precisões técnicas e acompanha o andamento estrutural de ponta a ponta.",
  },
  {
    role: "MESTRE DE OBRAS",
    icon: HardHat,
    actionIcon: Camera,
    actionTitle: "Registro Diário (RDO)",
    actionSub: "Fotos, evolução e observações em tempo real.",
    desc: "Registra o dia a dia da obra com fotos reais, materiais aplicados e efetivo em campo.",
  },
  {
    role: "ARQUITETO",
    icon: Compass,
    actionIcon: MessageSquare,
    actionTitle: "Revisões e Melhorias",
    actionSub: "Comentários, aprovações e novas propostas.",
    desc: "Sugere ajustes, aprova alterações e acompanha o cumprimento fiel do projeto executivo.",
  },
  {
    role: "CLIENTE",
    icon: Smartphone,
    actionIcon: CheckCircle2,
    actionTitle: "Acompanhamento Fácil",
    actionSub: "Veja o progresso de onde você estiver.",
    desc: "Acompanha tudo pelo celular de forma simples e transparente, sem precisar pisar na poeira.",
  },
];

// Official Checklist from Elleve Post
const platformFeatures = [
  "Projetos & Plantas Técnicas",
  "Evolução Diária da Obra",
  "Comunicação Integrada",
  "Gestão de Documentos",
  "Transparência Financeira",
  "Atualizações em Tempo Real",
];

// Official Bottom Pillars
const bottomPillars = [
  { icon: Clock, title: "Mais Controle", desc: "Cronograma e etapas auditadas diariamente." },
  { icon: ShieldCheck, title: "Mais Transparência", desc: "Acesso total aos relatórios e fotos da obra." },
  { icon: Users, title: "Mais Integração", desc: "Engenheiro, mestre, arquiteto e cliente alinhados." },
  { icon: BarChart3, title: "Mais Resultados", desc: "Sem desperdício, sem retrabalho, no prazo exato." },
];

export function ElleveTechSection() {
  return (
    <section id="tecnologia" className="relative bg-ink text-cream py-28 md:py-36 border-t border-cream/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Top Eyebrow Strip */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-cream/10 pb-6 mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-cream/70">
            Toda a sua obra, em um só lugar.
          </span>
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-cream/50">
            Planejar · Construir · Acompanhar · Evoluir
          </div>
        </div>

        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-cream leading-tight">
            Conexão em <br />
            <span className="font-medium text-white">todas as etapas.</span>
          </h2>
          <p className="mt-4 font-sans text-base sm:text-lg text-cream/80 leading-relaxed">
            Mais organização, transparência e resultados para o seu projeto. Com a <strong>Plataforma Elleve</strong>, eliminamos a "caixa preta" da construção civil e conectamos todos os envolvidos em um fluxo digital direto no seu celular.
          </p>
        </div>

        {/* 4 Interactive Persona Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {platformRoles.map((item) => (
            <div
              key={item.role}
              className="p-6 rounded-2xl border border-cream/15 bg-[#141414] flex flex-col justify-between hover:border-cream/35 transition-all group"
            >
              <div>
                {/* Role Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-xl border border-cream/20 bg-cream/5 flex items-center justify-center text-cream">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cream/60 block">
                      Perfil
                    </span>
                    <h3 className="font-display text-base font-semibold text-cream group-hover:text-white transition-colors">
                      {item.role}
                    </h3>
                  </div>
                </div>

                <p className="font-sans text-xs sm:text-sm text-cream/75 leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              {/* Action Pill Inside Card */}
              <div className="pt-4 border-t border-cream/10 flex items-start gap-3">
                <item.actionIcon size={16} className="text-cream mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-display text-xs font-semibold text-cream">
                    {item.actionTitle}
                  </h4>
                  <p className="text-[11px] font-sans text-cream/60 leading-tight mt-0.5">
                    {item.actionSub}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Display with Official Image & Checklist */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24 rounded-3xl border border-cream/15 bg-[#121212] p-8 sm:p-12 overflow-hidden">
          {/* Left Column: Official infographic image */}
          <div className="lg:col-span-7 relative aspect-[4/3] rounded-2xl overflow-hidden border border-cream/20">
            <Image
              src="/images/elleve-canteiro-plataforma.jpg"
              alt="Plataforma Elleve - Conexão em todas as etapas"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="font-mono text-xs uppercase tracking-wider text-cream/80 bg-ink/70 px-3 py-1 rounded-full border border-cream/15 backdrop-blur-sm">
                Canteiro de Obras Transparente
              </span>
            </div>
          </div>

          {/* Right Column: Platform Capabilities Checklist */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-cream/60 mb-2 block">
                Controle Integral
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-medium text-cream mb-6">
                Tudo o que sua obra exige, na palma da sua mão.
              </h3>

              <div className="space-y-4 font-sans">
                {platformFeatures.map((feat) => (
                  <div key={feat} className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-cream/15 border border-cream/30 flex items-center justify-center text-cream shrink-0">
                      <CheckCircle2 size={13} />
                    </div>
                    <span className="text-sm font-medium text-cream/90">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-cream/15">
              <a
                href="https://wa.me/5538999999999?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Canteiro%20Transparente%20da%20Elleve."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 rounded-full bg-cream text-ink font-display font-semibold text-xs uppercase tracking-wider hover:opacity-90 transition-all"
              >
                Conhecer a Plataforma Elleve
              </a>
            </div>
          </div>
        </div>

        {/* 4 Bottom Value Pillars Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-cream/15 pt-12 gap-8">
          {bottomPillars.map((p) => (
            <div key={p.title} className="text-center sm:text-left">
              <div className="h-10 w-10 rounded-xl border border-cream/20 bg-cream/5 flex items-center justify-center text-cream mb-4 mx-auto sm:mx-0">
                <p.icon size={20} />
              </div>
              <h4 className="font-display text-lg font-medium text-cream mb-1">
                {p.title}
              </h4>
              <p className="font-sans text-xs text-cream/70 leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
