import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// Link-preview card for prigeex.com (X, Telegram, Slack, LinkedIn). Rendered
// once at build time from the hero poster frame.

export const alt = "PrigeeX, an institutional venue for on-chain markets.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const poster = await readFile(join(process.cwd(), "public/assets/aviation-poster.jpg"));
  const bg = `data:image/jpeg;base64,${poster.toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", background: "#06070a" }}>
        <img
          src={bg}
          alt=""
          width={900}
          height={1600}
          style={{ position: "absolute", top: -620, left: 380, width: 900, height: 1600 }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1200,
            height: 630,
            display: "flex",
            background: "linear-gradient(90deg, rgba(6,7,10,1) 0%, rgba(6,7,10,0.95) 38%, rgba(6,7,10,0.35) 70%, rgba(6,7,10,0.1) 100%)",
          }}
        />
        <div style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "64px 72px", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <svg width="56" height="56" viewBox="0 0 48 48" fill="none">
              <path d="M6 32 A18 18 0 0 1 42 32" stroke="#E7E6E1" strokeWidth="2" strokeLinecap="round" />
              <circle cx="24" cy="14" r="4.6" fill="#E8C089" />
              <path d="M24 18.6 L24 40" stroke="#E8C089" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <div style={{ display: "flex", fontSize: 40, color: "#E7E6E1", letterSpacing: -0.5 }}>
              Prigee<span style={{ color: "#E8C089" }}>X</span>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 88, lineHeight: 1.02, color: "#F2F1EC", letterSpacing: -2 }}>Liquidity,</div>
            <div style={{ fontSize: 88, lineHeight: 1.02, color: "#E8C089", letterSpacing: -2 }}>at altitude.</div>
            <div style={{ marginTop: 28, fontSize: 30, color: "rgba(231,230,225,0.78)", maxWidth: 620 }}>
              An institutional venue for on-chain markets. Live on Arbitrum One.
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
