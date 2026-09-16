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

        <div>
          <span className="eyebrow">HEADQUARTERS</span>
          <div className="footer-address">
            <strong>Grandview Capital Lending Inc.</strong>
            <br />
            <span>EIN: 42-2403145</span>
            <br />
            <span>Contact: Enrique Romero</span>
            <br />
            30 N Gould St, Suite 64218
            <br />
            Sheridan, WY 82801, United States
            <br />
            <a href="tel:+13072070000">(307) 207-0000</a>
            <br />
            <a href="mailto:Info@grandviewcapital.com">Info@grandviewcapital.com</a>
          </div>
        </div>
      </div>

      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} Grandview Capital Lending Inc. All rights reserved.</span>
        <span>Financial consulting. Independent perspective.</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}


