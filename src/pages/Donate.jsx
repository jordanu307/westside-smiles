import { Link } from 'react-router-dom'
import FadeIn from '../components/FadeIn.jsx'

const supplies = [
  'Toothbrushes & toothpaste',
  'Bar soap & body wash',
  'Deodorant',
  'Socks (new)',
  'Shampoo & conditioner',
  'Razors',
  'Wet wipes',
  'Feminine hygiene products',
]

function Donate() {
  return (
    <>
      <header className="page-header container">
        <FadeIn>
          <div className="eyebrow">Support Our Work</div>
          <h1>Donate</h1>
          <p>
            Every dollar &amp; supply goes directly to neighbors experiencing
            homelessness in NYC.
          </p>
        </FadeIn>
      </header>

      <section className="section-tight">
        <div className="container">
          <FadeIn>
            <div className="donate-grid">
              <div className="donate-card">
                <div className="eyebrow">Option One</div>
                <h3>Donate via Zelle</h3>
                <p style={{ color: 'var(--text-soft)' }}>
                  The fastest way to support our drives. Send any amount
                  directly through Zelle using the phone number below.
                </p>
                <a className="zelle-box" href="tel:+16469392590">
                  <span className="zelle-label">Zelle</span>
                  <span className="zelle-number">(646) 939-2590</span>
                </a>
              </div>

              <div className="donate-card">
                <div className="eyebrow">Option Two</div>
                <h3>Donate via Venmo</h3>
                <p style={{ color: 'var(--text-soft)' }}>
                  Quick and easy — send any amount through Venmo using the
                  handle below.
                </p>
                <a
                  className="zelle-box"
                  href="https://venmo.com/u/Westsidesmilesnyc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="zelle-label">Venmo</span>
                  <span className="zelle-number">@Westsidesmilesnyc</span>
                </a>
              </div>

              <div className="donate-card">
                <div className="eyebrow">Option Three</div>
                <h3>Drop Off Supplies</h3>
                <p style={{ color: 'var(--text-soft)' }}>
                  Prefer to give in person? We accept new, unopened hygiene
                  supplies for our kit packing days. Reach out on the{' '}
                  <Link to="/contact" className="inline-link">
                    contact page
                  </Link>{' '}
                  to coordinate a drop-off on the Upper West Side.
                </p>
                <ul className="supply-list">
                  {supplies.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>

          <FadeIn className="donate-note">
            100% of donations go directly to individuals experiencing
            homelessness in New York City. We are a fully volunteer-run
            student organization. No overhead, no salaries.
          </FadeIn>
        </div>
      </section>
    </>
  )
}

export default Donate
