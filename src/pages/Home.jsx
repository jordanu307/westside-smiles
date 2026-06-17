import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import FadeIn from '../components/FadeIn.jsx'
import AnimatedStat from '../components/AnimatedStat.jsx'

const HEADLINE_WORDS = ['Teens', 'Helping', 'Those', 'In', 'Need']

const gridPhotos = [
  { src: '/images/2winterwalkdec2025.jpg',   alt: 'West Side Smiles volunteers at the NYC Winter Walk in Central Park, December 2025' },
  { src: '/images/2winterwalk1dec2025.jpg',   alt: 'Volunteers gathered at the Winter Walk event, December 2025' },
  { src: '/images/2winterwalk2dec2025.jpg',   alt: 'West Side Smiles team participating in Winter Walk in Central Park' },
  { src: '/images/2hygienekitmay2026.jpg',    alt: 'Volunteers assembling hygiene kits at Congregation Rodeph Sholom, May 2026' },
  { src: '/images/2hygienekit1may2026.jpeg',  alt: 'Completed hygiene kits ready for donation, May 2026' },
  { src: '/images/hygienekitjune2023.jpg',    alt: 'West Side Smiles hygiene kit packaging event, June 2023' },
  { src: '/images/2bakesaleapril2023.jpg',    alt: 'West Side Smiles bake sale fundraiser table, April 2023' },
  { src: '/images/jordanandmilesphoot.jpg',   alt: 'Jordan Usdin and Miles Shankman, co-founders of West Side Smiles' },
]

const partners = [
  { logo: '/images/cov.png',   name: 'Covenant House New York',           href: 'https://ny.covenanthouse.org' },
  { logo: '/images/tbm.png',   name: 'The Bowery Mission',                href: 'https://www.bowery.org' },
  { logo: '/images/ww.png',    name: 'Winter Walk',                       href: 'https://winterwalk.org' },
  { logo: '/images/cfth.jpg',  name: 'Coalition for the Homeless',        href: 'https://www.coalitionforthehomeless.org' },
  { logo: '/images/win.png',   name: 'WIN',                               href: 'https://www.winnyc.org' },
  { logo: '/images/wscah.png', name: 'West Side Campaign Against Hunger', href: 'https://www.wscah.org' },
]

function useReveal() {
  const ref = useRef(null)
  const [on, setOn] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setOn(true); obs.disconnect() } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return [ref, on]
}

function Home() {
  useEffect(() => { document.title = 'West Side Smiles' }, [])
  const [gridRef, gridOn] = useReveal()

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-blobs" aria-hidden="true">
          <div className="hero-blob hero-blob-1" />
          <div className="hero-blob hero-blob-2" />
          <div className="hero-blob hero-blob-3" />
        </div>
        <div className="hero-inner">
          <div className="eyebrow eyebrow-blue hero-eyebrow-anim">A Youth-Led Nonprofit · NYC</div>
          <h1 className="hero-headline">
            {HEADLINE_WORDS.map((word, i) => (
              <span key={word} className="hero-word" style={{ '--delay': `${i * 90}ms` }}>
                {word}{i < HEADLINE_WORDS.length - 1 ? ' ' : ''}
              </span>
            ))}
          </h1>
          <p className="hero-tag hero-subtext-anim">
            Supporting people experiencing homelessness across New York City.
          </p>
          <div className="hero-buttons hero-btn-anim">
            <Link to="/donate" className="btn btn-primary btn-large">Donate</Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats">
        <div className="container">
          <FadeIn>
            <div className="stats-grid">
              <AnimatedStat value={750} suffix="+" label="lbs of supplies donated" />
              <AnimatedStat value={500} suffix="+" label="hygiene kits assembled" />
              <AnimatedStat value={7}   suffix="+" label="shelters partnered with" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Intro */}
      <section className="section">
        <div className="container">
          <FadeIn className="intro">
            <div className="eyebrow eyebrow-blue">Our Mission</div>
            <h2>Youth-led. Community-driven.</h2>
            <p>
              West Side Smiles is a teen-run nonprofit on the Upper West Side of New York
              City. We support people experiencing homelessness through hygiene kit drives,
              clothing drives, and community programming citywide.{' '}
              <Link to="/about" className="inline-link">Learn more about us</Link>{' '}
              or{' '}
              <Link to="/donate" className="inline-link">donate here</Link>{' '}
              to help us keep going.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Photo grid */}
      <section className="section-tight">
        <div className="container">
          <div className="photo-grid" ref={gridRef}>
            {gridPhotos.map(({ src, alt }, i) => (
              <figure
                key={src}
                className={`photo-grid-item${gridOn ? ' revealed' : ''}`}
                style={{ '--stagger': i }}
              >
                <img src={src} alt={alt} loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section" style={{ background: 'var(--white)', borderBlock: '1px solid var(--border)' }}>
        <div className="container">
          <FadeIn>
            <div className="eyebrow eyebrow-blue" style={{ textAlign: 'center' }}>In Partnership With</div>
            <h2 style={{ textAlign: 'center', marginBottom: '0.25rem' }}>Our Partners</h2>
            <p style={{ textAlign: 'center', color: 'var(--text-soft)', marginBottom: '0' }}>
              Organizations we work with across New York City.
            </p>
          </FadeIn>
          <FadeIn>
            <div className="partners-grid">
              {partners.map((p, i) => (
                <a
                  key={p.name}
                  className={`partner-card partner-card-${i % 2 === 0 ? 'blue' : 'navy'}`}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={p.name}
                >
                  <img src={p.logo} alt={p.name} />
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}

export default Home
