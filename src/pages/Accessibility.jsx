import { useEffect } from 'react'
import FadeIn from '../components/FadeIn.jsx'

function Accessibility() {
  useEffect(() => {
    document.title = 'Accessibility | West Side Smiles'
  }, [])

  return (
    <>
      <header className="page-header container">
        <FadeIn>
          <div className="eyebrow">Our Commitment</div>
          <h1>Accessibility</h1>
          <p>Building a site everyone can use.</p>
        </FadeIn>
      </header>

      <section className="section-tight">
        <div className="container">
          <FadeIn>
            <div className="about-body" style={{ maxWidth: '720px', margin: '0 auto' }}>
              <p>
                West Side Smiles is committed to making our website accessible to everyone,
                including people with disabilities. We aim to conform to the Web Content
                Accessibility Guidelines (WCAG) 2.1 Level AA.
              </p>
              <h2>Accessibility Feedback</h2>
              <p>
                We welcome feedback on any accessibility barriers you encounter on this site.
                If you have difficulty accessing any content or functionality, please contact
                us at{' '}
                <a href="mailto:westsidesmiless@gmail.com" className="inline-link">
                  westsidesmiless@gmail.com
                </a>
                . We will do our best to respond and address your concerns promptly.
              </p>
              <h2>Technical Information</h2>
              <p>
                This site is built with HTML, CSS, JavaScript, and WAI-ARIA. We test with
                modern browsers and aim to support assistive technologies including screen
                readers. If something is not working as expected, please let us know.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}

export default Accessibility
