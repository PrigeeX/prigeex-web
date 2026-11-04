import { DOCS } from "@/lib/docs";

const FAQS = [
  { question: "Is aviation settlement available now?", answer: "No. Aviation supplier settlement is a planned direction. Customer discovery and workflow validation come before a proposed pilot." },
  { question: "Does aviation settlement require PGX or cryptocurrency?", answer: "No approach has been selected. Conventional technology, blockchain and hybrid options will be compared during discovery." },
  { question: "Where can I learn about the exchange risks?", answer: "Read the security information and product guides in the documentation. On-chain trading, liquidity provision and staking carry financial and smart contract risks." },
];

export const Boarding = () => (
  <>
    <section className="security-section" id="security" aria-labelledby="security-title">
      <div className="container section-split">
        <p className="section-label">Security & governance</p>
        <div><h2 id="security-title">Understand the controls.<br /><em>Understand the risks.</em></h2><p className="section-intro">PrigeeX uses Safe multisignature administration for protocol ownership. Review the documented controls, contract references and security disclosures before participating. Audits do not guarantee safety.</p><div className="resource-links"><a href={DOCS.learn.security}>Security information <span aria-hidden="true">↗</span></a><a href={DOCS.reference.contracts}>Contract references <span aria-hidden="true">↗</span></a></div></div>
      </div>
    </section>
    <section className="faq-section" id="questions" aria-labelledby="faq-title">
      <div className="container section-split"><div><p className="section-label">A few essentials</p><h2 id="faq-title">Questions,<br /><em>answered.</em></h2></div><div className="faq-list">{FAQS.map(faq => <details key={faq.question}><summary>{faq.question}<span className="faq-symbol" aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div></div>
    </section>
  </>
);
