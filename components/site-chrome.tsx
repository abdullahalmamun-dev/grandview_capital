import { ArrowUpRight } from 'lucide-react';

export function Brand() {
  return (
    <a href="/" className="brand" aria-label="Grandview Capital home">
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M38 13A18 18 0 1 0 39 34V24H25" stroke="currentColor" strokeWidth="3" />
        <path d="m17 17 9 18 15-29" stroke="currentColor" strokeWidth="3" />
      </svg>
      <span>
        GRANDVIEW<small>CAPITAL</small>
      </span>
    </a>
  );
}

export function Header() {
  return (
    <header className="header shell">
      <Brand />
      <nav aria-label="Main navigation">
        <a href="/#approach">Our approach</a>
        <a href="/#programs">Capital programs</a>
        <a href="/#about">Why Grandview</a>
      </nav>
      <a className="nav-cta" href="/#intake">
        Let’s talk <ArrowUpRight size={17} />
      </a>
    </header>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="shell footer-top">
        <div>
          <Brand />
          <p>
            Thoughtful capital guidance.
            <br />
            A broader perspective on what’s next.
          </p>
          <div style={{ marginTop: '14px', fontSize: '11.5px', color: '#637079', lineHeight: '1.6' }}>
            <strong style={{ color: '#142735', fontWeight: '600' }}>Lead Service Group LLC</strong>
            <br />
            d/b/a Grandview Capital
            <br />
            690 S Highway 89, Suite 200. Box 9149
            <br />
            Jackson, WY 83002, US
            <br />
            Phone: <a href="tel:+17147479562" style={{ textDecoration: 'underline', color: '#586970' }}>+1 (714) 747-9562</a>
          </div>
        </div>
        <div>
          <span className="eyebrow">EXPLORE</span>
          <a href="/#approach">Our approach</a>
          <a href="/#programs">Capital programs</a>
          <a href="/#intake">Request a consultation</a>
        </div>
        <div>
          <span className="eyebrow">INFORMATION</span>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms &amp; Conditions</a>
          <a href="/terms#sms">SMS Terms</a>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} Lead Service Group LLC (d/b/a Grandview Capital). All rights reserved.</span>
        <span>Financial consulting. Independent perspective.</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}

