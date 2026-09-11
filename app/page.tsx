import Intake from '@/components/intake';
import { Header, Footer } from '@/components/site-chrome';
import ProgramSlideshow from '@/components/program-slideshow';
import { ArrowUpRight, ArrowDownRight, Compass, Layers3, MoveUpRight } from 'lucide-react';

export default function Home() {
  return (
    <main id="top">
      <Header />
      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <span /> INDEPENDENT CAPITAL CONSULTING
            </p>
            <h1>
              A broader view.
              <br />
              A clearer path
              <br />
              <em>to capital.</em>
            </h1>
            <p className="lede">
              Your next chapter deserves perspective. We help growing
              businesses understand, prepare for, and pursue the right capital
              program.
            </p>
            <a className="hero-link" href="#programs">
              Explore the possibilities <ArrowDownRight size={21} />
            </a>
            <div className="hero-foot">
              <span>YOUR AMBITION. OUR PERSPECTIVE.</span>
              <span>01 — 06 CAPITAL PATHWAYS</span>
            </div>
          </div>
          <Intake />
        </div>
      </section>

      <section className="intro shell" id="approach">
        <p className="eyebrow">THE GRANDVIEW APPROACH</p>
        <div className="intro-grid">
          <h2>
            See the whole picture.
            <br />
            <em>Move forward with clarity.</em>
          </h2>
          <div>
            <p>
              Every business has a different story, operating rhythm, and
              ambition. We begin by understanding yours. Then we help organize
              the financial picture, identify suitable programs, and prepare
              you for productive conversations with potential capital providers.
            </p>
            <p className="muted">
              Grandview Capital is a financial consultant, not a lender. We do
              not make credit decisions or guarantee approvals. Our role is to
              help you navigate the landscape with greater clarity.
            </p>
          </div>
        </div>
        <div className="principles">
          <div>
            <Compass />
            <strong>Perspective first</strong>
            <span>Understand your business and ambition.</span>
          </div>
          <div>
            <Layers3 />
            <strong>Options in context</strong>
            <span>Evaluate the paths that fit your priorities.</span>
          </div>
          <div>
            <MoveUpRight />
            <strong>A considered next step</strong>
            <span>Prepare for productive capital conversations.</span>
          </div>
        </div>
      </section>

      <section className="programs" id="programs">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">SIX PATHWAYS. YOUR DIRECTION.</p>
              <h2>
                Capital takes many forms.
                <br />
                <em>Let’s find your fit.</em>
              </h2>
            </div>
            <p>
              Established and strategic capital paths, considered around your
              business profile, timeline, and priorities.
            </p>
          </div>

          <ProgramSlideshow />
        </div>
      </section>

      <section className="about shell" id="about">
        <div className="about-statement">
          <p className="eyebrow">WHY GRANDVIEW</p>
          <h2>
            Good guidance
            <br />
            starts with
            <br />
            <em>good listening.</em>
          </h2>
          <p>A steady hand for an important decision.</p>
          <div className="about-stat">
            <strong>1:1</strong>
            <span>CONSULTATIVE APPROACH</span>
          </div>
        </div>
        <div className="about-copy">
          <p>
            We work alongside business owners to make complex options easier to
            understand and next steps easier to act on.
          </p>
          {[
            [
              'Personalized perspective',
              'Recommendations shaped around your business—not a one-size-fits-all product.',
            ],
            [
              'Clear communication',
              'Plain-language guidance on tradeoffs, requirements, and the process ahead.',
            ],
            [
              'Long-term thinking',
              'A capital strategy considered in the context of where you want the business to go.',
            ],
          ].map(([title, copy], i) => (
            <article key={title}>
              <span>0{i + 1}</span>
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="closing">
        <div className="shell">
          <div>
            <p className="eyebrow">MAKE ROOM FOR WHAT’S NEXT</p>
            <h2>
              Your ambition.
              <br />
              <em>A clearer way forward.</em>
            </h2>
          </div>
          <a href="#intake">
            Start a conversation <ArrowUpRight size={22} />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
