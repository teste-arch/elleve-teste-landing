"use client";

import Link from "next/link";
import { ElleveLogo } from "@/components/ui/elleve-logo";

export function Footer() {
  return (
    <footer className="bg-black text-cream border-t border-cream/10">
      <div className="max-w-7xl mx-auto px-6 py-16 md:px-12 md:py-20 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-2">
            <ElleveLogo variant="wordmark" subtitle={true} theme="dark" />
            <p className="mt-4 max-w-sm font-sans text-sm text-cream/70 leading-relaxed">
              Mais que obras, legados para o futuro. Da concepção à entrega, unimos técnica rigorosa e design exclusivo em porcelanato para criar espaços que inspiram.
            </p>
            <p className="mt-4 font-mono text-xs text-cream/50">
              Lassance — Minas Gerais, Brasil
            </p>
          </div>

          {/* Nav Column */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-cream/90 mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 font-sans text-sm text-cream/70">
              <li>
                <Link href="#hero" className="hover:text-cream transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="#ecossistema" className="hover:text-cream transition-colors">
                  Ecossistema
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="hover:text-cream transition-colors">
                  Obras & Engenharia
                </Link>
              </li>
              <li>
                <Link href="#porcelanato" className="hover:text-cream transition-colors">
                  Arte em Porcelanatos
                </Link>
              </li>
              <li>
                <Link href="#tecnologia" className="hover:text-cream transition-colors">
                  Plataforma Elleve
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-cream/90 mb-4">
              Especialidades
            </h4>
            <ul className="space-y-2.5 font-sans text-sm text-cream/70">
              <li>Execução Chave na Mão</li>
              <li>Bancadas & Ilhas Gourmet</li>
              <li>Lavatórios & Nichos Esculpidos</li>
              <li>Arquitetura & Urbanismo</li>
              <li>Locação de Andaimes</li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-cream/90 mb-4">
              Atendimento
            </h4>
            <ul className="space-y-2.5 font-sans text-sm text-cream/70">
              <li>
                <a
                  href="https://wa.me/5538999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cream transition-colors font-medium text-cream"
                >
                  WhatsApp Oficial →
                </a>
              </li>
              <li>contato@elleveconstrutora.com.br</li>
              <li>Segunda a Sexta, 08h às 18h</li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-cream/50">
          <p>© {new Date().getFullYear()} Elleve Construtora. Todos os direitos reservados.</p>
          <p>Ambientes que elevam.</p>
        </div>
      </div>
    </footer>
  );
}
