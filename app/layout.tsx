import type { Metadata, Viewport } from "next";
import { Outfit, DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#3C5A4F",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "ELLEVE | Da Fundação ao Acabamento de Alto Padrão",
  description:
    "Especialistas em execução de obras completas, arte em porcelanato e canteiro transparente gerenciado via Plataforma Elleve. Lassance - MG.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${dmSans.variable} ${spaceGrotesk.variable} font-sans antialiased selection:bg-cream selection:text-ink bg-ink text-cream`}
      >
        {children}
      </body>
    </html>
  );
}
