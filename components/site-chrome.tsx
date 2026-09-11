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
          <span className="eyebrow">CONTACT US</span>
          <div style={{ fontSize: '12px', color: '#586970', lineHeight: '1.75' }}>
            <strong style={{ color: '#142735', fontWeight: '600', display: 'block', marginBottom: '2px' }}>
              Lead Service Group LLC
            </strong>
            <span style={{ fontSize: '11px', color: '#8c7547', display: 'block', marginBottom: '6px' }}>
              d/b/a Grandview Capital
            </span>
            690 S Highway 89, Suite 200
            <br />
            Box 9149
            <br />
            Jackson, WY 83002, US
            <br />
            <span style={{ display: 'inline-block', marginTop: '6px' }}>
              Phone:{' '}
              <a href="tel:+17147479562" style={{ textDecoration: 'underline', color: '#142735', fontWeight: '500' }}>
                +1 (714) 747-9562
              </a>
            </span>
          </div>
        </div>

        <div>
          <span className="eyebrow">INFORMATION &amp; LEGAL</span>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms &amp; Conditions</a>
          <a href="/terms#sms">SMS Terms</a>
          <p style={{ fontSize: '11px', color: '#637079', lineHeight: '1.6', marginTop: '10px' }}>
            <strong style={{ color: '#142735' }}>Grandview Capital Updates</strong>
            <br />
            By submitting an inquiry, you consent to receive text messages regarding your request. Msg frequency varies (2–4 msgs/mo). <strong>Msg &amp; data rates may apply.</strong> Reply <strong>STOP</strong> to cancel, <strong>HELP</strong> for help (+1 714-747-9562). Mobile info is not shared for marketing.
          </p>
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



