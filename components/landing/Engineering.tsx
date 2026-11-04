import { DOCS } from "@/lib/docs";

const SERVICES = [
  { title: "Trading", body: "Exchange supported tokens through on-chain liquidity pools.", href: DOCS.guides.swap, link: "Trading guide" },
  { title: "Liquidity", body: "Supply assets to pools that support trading, with exposure to market and liquidity risks.", href: DOCS.guides.liquidityOverview, link: "Liquidity guide" },
  { title: "Staking", body: "The PGX staking mechanism connects token participation with protocol fee distribution.", href: DOCS.guides.stake, link: "Staking guide" },
];

export const Engineering = () => (
  <section className="ecosystem-section" id="ecosystem" aria-labelledby="ecosystem-title">
    <div className="container">
      <div className="section-heading"><div><p className="section-label">The exchange foundation</p><h2 id="ecosystem-title">One ecosystem.<br /><em>Three core functions.</em></h2></div><p className="heading-note">Built on Arbitrum. Product availability and access remain subject to launch approval.</p></div>
      <div className="services">{SERVICES.map(service => <article key={service.title}><h3>{service.title}</h3><p>{service.body}</p><a className="text-link" href={service.href}>{service.link} <span aria-hidden="true">↗</span></a></article>)}</div>
      <div className="pgx-section" id="pgx">
        <div><p className="section-label">PGX Token</p><h3>The exchange ecosystem token.</h3></div>
        <div><p>PGX supports the exchange staking and fee-distribution mechanism. Its use in aviation settlement has not been assumed.</p><a className="text-link" href={DOCS.investors.tokenomics}>Read PGX token details <span aria-hidden="true">↗</span></a></div>
      </div>
    </div>
  </section>
);
