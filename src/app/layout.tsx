import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Noto_Serif } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Suspense } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  preload: true,
  display: "swap",
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  preload: true,
  display: "swap",
  weight: ["400", "500"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plusJakartaSans",
  subsets: ["latin"],
  preload: true,
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mimosdapoli.com.br"),
  title: {
    default: "Mimos da Poli | Presentes e Lembranças Personalizadas",
    template: "%s | Mimos da Poli",
  },
  applicationName: "Mimos da Poli",
  description:
    "Descubra os melhores mimos, presentes artesanais e lembranças personalizadas na Mimos da Poli. Produtos feitos com amor para encantar quem você ama.",
  keywords: [
    "mimos da poli",
    "loja mimos da poli",
    "presentes personalizados",
    "lembranças personalizadas",
    "Perfumes personalizados",
    "Cremes personalizados",
    "kits de beleza personalizados",
    "kits de cuidados pessoais personalizados",
    "kits de spa personalizados",
    "kits de aromaterapia personalizados",
    "kits de banho personalizados",
    "kits de skincare personalizados",
    "kits de maquiagem personalizados",
    "kits de cuidados com o cabelo personalizados",
    "kits de cuidados com a pele personalizados",
    "kits de cuidados com as mãos personalizados",
    "kits de cuidados com os pés personalizados",
    "kits de cuidados com o corpo personalizados",
    "Joias personalizadas",
    "acessórios personalizados",
    "decoração personalizada",
    "artesanato personalizado",
    "mimos criativos",
    "presentes artesanais",
    "comprar presentes personalizados",
    "loja de lembranças",
    "presentes personalizados para namorado",
    "mimos para amigas",
    "lembrancinhas de maternidade",
    "presente dia das mães personalizado",
    "presente dia dos pais criativo",
    "mimos personalizados para clientes",
    "presente para professora personalizado",
    "caixas de presente personalizadas",
    "canecas personalizadas para presente",
    "papelaria criativa",
    "kits de presentes personalizados",
    "loja de presentes online",
  ],
  authors: [
    {
      name: "Helcio Anicio",
      url: "https://codandoideias-helcioanicios-projects.vercel.app/",
    },
  ],
  creator: "Codando Ideias",
  publisher: "Mimos da Poli",

  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Evita problemas de conteúdo duplicado (SEO)
  alternates: {
    canonical: "https://www.mimosdapoli.com.br",
  },

  // Otimização para compartilhamento no WhatsApp, Facebook, LinkedIn, etc.
  openGraph: {
    title: "Mimos da Poli | Presentes e Lembranças Personalizadas",
    description:
      "Descubra os melhores mimos, presentes artesanais e lembranças personalizadas na Mimos da Poli. Produtos feitos com amor.",
    url: "https://www.mimosdapoli.com.br",
    siteName: "Mimos da Poli",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/logo.png", // Crie e adicione esta imagem na pasta public (1200x630px)
        width: 1200,
        height: 630,
        alt: "Logotipo da Mimos da Poli em destaque com exemplos de presentes personalizados.", // Acessibilidade para leitores de tela
      },
    ],
  },

  // Otimização para o Twitter/X
  twitter: {
    card: "summary_large_image",
    title: "Mimos da Poli | Presentes e Lembranças Personalizadas",
    description:
      "Descubra os melhores mimos e presentes personalizados na Mimos da Poli.",
    images: "/logo.png", // Mesma imagem Open Graph
  },

  // Definição completa de ícones e responsividade visual
  icons: {
    icon: [
      { url: "/logoIcon.png" },
      { url: "/logoIcon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/logoIcon.png", sizes: "180x180", type: "image/png" }, // Ideal para atalhos no iOS
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={cn(
        "h-full",
        "antialiased",
        plusJakartaSans.variable,
        notoSerif.variable,
        "font-inter",
        inter.variable,
      )}
    >
      <meta
        name="google-site-verification"
        content="UHzbsXm7nr5vmO7LpTqax8KzunnbNGeicZD5GGOe_H0"
      />
      <body
        className="bg-background flex w-full flex-col overflow-x-hidden"
        suppressHydrationWarning={true}
      >
        {children}
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
