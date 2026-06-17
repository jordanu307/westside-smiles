import FadeIn from '../components/FadeIn.jsx'

const GOOGLE_FORM_URL =
  'https://docs.google.com/forms/d/19Caa-xoLg0Gcc7oPgxIQOL8qvPTNAHk-zGMwp6SOV_k/viewform?embedded=true'

function Contact() {
  return (
    <>
      <header className="page-header container">
        <FadeIn>
          <div className="eyebrow">Get In Touch</div>
          <h1>Contact Us</h1>
          <p>
            Questions, partnership ideas, or interested in volunteering? We'd
            love to hear from you.
          </p>
        </FadeIn>
      </header>

      <section className="section-tight">
        <div className="container">
          <FadeIn>
            <div className="contact-grid">
              <div className="contact-info-card">
                <h3>Reach Us</h3>

                <div className="contact-item">
                  <span className="contact-label">Email</span>
                  <a
                    href="mailto:westsidesmiless@gmail.com"
                    className="contact-value"
                  >
                    westsidesmiless@gmail.com
                  </a>
                </div>

                <div className="contact-item">
                  <span className="contact-label">Phone</span>
                  <a href="tel:+16469392590" className="contact-value">
                    (646) 939-2590
                  </a>
                </div>

                <div className="contact-item">
                  <span className="contact-label">Instagram</span>
                  <a
                    href="https://instagram.com/westsidesmiless_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-value"
                  >
                    @westsidesmiless_
                  </a>
                </div>

                <div className="contact-item">
                  <span className="contact-label">Based in</span>
                  <span className="contact-value">Upper West Side, NYC</span>
                </div>
              </div>

              <div className="contact-form-wrap">
                <iframe
                  src={GOOGLE_FORM_URL}
                  title="West Side Smiles contact form"
                  loading="lazy"
                >
                  Loading…
                </iframe>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}

export default Contact
