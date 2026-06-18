import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import FadeIn from '../components/FadeIn.jsx'

const whatWeDo = [
  {
    title: 'Hygiene Kit Drives',
    desc: 'We assemble and donate kits packed with essentials including toothbrushes, soap, deodorant, and socks, then deliver them directly to shelters across NYC.',
    border: 'var(--blue-accent)',
  },
  {
    title: 'Clothing Drives',
    desc: 'We collect new and gently used clothing, especially warm layers, to distribute through our shelter partners throughout the year.',
    border: 'var(--navy)',
  },
  {
    title: 'Community Events',
    desc: 'We host bake sales, kit-packing days, and workshops with local schools and organizations to raise funds and build awareness around homelessness.',
    border: 'var(--blue-accent)',
  },
]

function About() {
  useEffect(() => { document.title = 'About | West Side Smiles' }, [])
  return (
    <>
      <div className="container about-page">
        <FadeIn className="about-header">
          <div className="eyebrow eyebrow-blue">About</div>
          <h1>Our Story</h1>
        </FadeIn>

        <FadeIn className="about-body">
          <p>
            In 2021, our sisters Sydney and Ellie founded West Side Smiles to support
            people experiencing homelessness in New York City. What started as a simple
            idea on the Upper West Side grew into a real force for good, building
            relationships with shelters across the city and showing just how much a small
            group of people can accomplish.
          </p>
          <p>
            Now we, Miles Shankman and Jordan Usdin, are carrying on the mission they
            started. We are two high schoolers who grew up watching this organization
            take shape and are committed to keeping it going. We believe that no one
            should go without basic hygiene, especially during the difficult transition
            of shelter life, and we show up for that belief every time we pack a kit
            or walk into a shelter.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="about-bio-photos-row">
            <img
              src="/images/jordanandmilesphoot.jpg"
              alt="Miles Shankman and Jordan Usdin, co-founders of West Side Smiles"
              loading="eager"
            />
            <img
              src="/images/jordanandmilesshot.jpg"
              alt="Miles and Jordan at a West Side Smiles event"
              loading="lazy"
            />
          </div>
        </FadeIn>

        <FadeIn className="about-body">
          <p>
            Additionally, we host programming with other organizations around NYC to involve
            our local community in making a difference and destigmatizing homelessness.
            Throughout the past five years, we have raised money to collect hygienic
            materials for homeless shelters. We have conducted numerous fundraisers to raise
            money for supplies and have communicated with over seven shelters around NYC,
            including the{' '}
            <a
              href="https://www.bowery.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-link"
            >
              Bowery Mission
            </a>{' '}
            and{' '}
            <a
              href="https://ny.covenanthouse.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-link"
            >
              Covenant House New York
            </a>
            . In the past years, we have donated over 750 pounds worth of hygiene supplies
            such as socks, toothpaste, toothbrushes, and deodorant! Look at some of our
            past fundraisers on our{' '}
            <Link to="/events" className="inline-link">gallery</Link>{' '}
            page.
          </p>
        </FadeIn>
      </div>

      {/* Mission banner, full bleed navy */}
      <FadeIn as="section" className="mission-banner">
        <div className="container">
          <p className="mission-statement">
            Our mission is to assist individuals experiencing homelessness in New York City
            by creating and donating kits of hygiene supplies and clothes for those residing
            in shelters.
          </p>
          <span className="mission-accent" aria-hidden="true" />
        </div>
      </FadeIn>

      {/* What We Do */}
      <section className="about-what-section">
        <div className="container">
          <FadeIn className="about-what-heading">
            <div className="eyebrow eyebrow-blue">How We Help</div>
            <h2>What We Do</h2>
          </FadeIn>
          <FadeIn>
            <div className="about-what-grid">
              {whatWeDo.map((item) => (
                <div
                  key={item.title}
                  className="about-what-card"
                  style={{ borderTopColor: item.border }}
                >
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}

export default About
