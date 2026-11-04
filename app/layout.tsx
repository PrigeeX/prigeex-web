import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.prigeex.com"),
  alternates: { canonical: "/" },
  title: "PrigeeX | Liquidity & Aviation Settlement Infrastructure",
  description:
    "Explore the PrigeeX exchange ecosystem and its planned aviation supplier settlement infrastructure.",
  keywords: [
    "PrigeeX", "PGX", "DEX", "institutional", "fintech",
    "liquidity", "settlement", "staking", "Arbitrum",
  ],
  icons: {
    icon: [
      { url: "/brand/prigeex-favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/brand/prigeex-mark-solid.svg",
  },
  openGraph: {
    title: "PrigeeX | Liquidity & Aviation Settlement Infrastructure",
    description:
      "On-chain exchange infrastructure and planned aviation supplier settlement.",
    type: "website",
    url: "https://www.prigeex.com",
    siteName: "PrigeeX",
  },
  twitter: {
    card: "summary_large_image",
    title: "PrigeeX | Liquidity & Aviation Settlement Infrastructure",
    description:
      "On-chain exchange infrastructure and planned aviation supplier settlement.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d151e",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="stylesheet" href="/theme.css" />
      </head>
      <body>
        <div className="app-shell">{children}</div>
      </body>
    </html>
  );
}
