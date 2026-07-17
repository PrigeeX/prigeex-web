import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PrigeeX, an institutional venue for on-chain markets.",
  description:
    "PrigeeX is institutional-grade infrastructure for on-chain liquidity and settlement. Built for capital arriving on-chain.",
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
    title: "PrigeeX, an institutional venue for on-chain markets.",
    description:
      "Institutional-grade infrastructure for on-chain liquidity and settlement.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#06070a",
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
