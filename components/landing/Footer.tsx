import { DOCS } from "@/lib/docs";

export const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <div className="site-footer__top">
        <div className="site-footer__brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/logo-horizontal.svg" alt="PrigeeX" width="220" height="48" />
          <p>Liquidity. Settlement. A clearer record.</p>
        </div>
        <nav aria-label="Footer project links"><p className="section-label">Explore</p><a href="#about">About PrigeeX</a><a href="#flight-plan">Aviation settlement</a><a href="#ecosystem">Exchange ecosystem</a></nav>
        <nav aria-label="Footer resource links"><p className="section-label">Resources</p><a href={DOCS.root}>Documentation</a><a href={DOCS.learn.security}>Security & risks</a><a href={DOCS.reference.faq}>Help & FAQs</a></nav>
      </div>
      <div className="site-footer__bottom"><span>© {new Date().getFullYear()} PrigeeX</span><span>Aviation settlement is in planning.</span></div>
    </div>
  </footer>
);
