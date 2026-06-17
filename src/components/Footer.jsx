import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/images/logo-tan.svg" alt="" className="footer-logo-img" />
            <h3>West Side Smiles</h3>
            <p>
              Teens supporting our New York City neighbors experiencing
              homelessness, one hygiene kit at a time.
            </p>
            <a
              className="ig-button"
              href="https://www.instagram.com/westsidesmiles_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow us &nbsp;@westsidesmiles_
            </a>
          </div>

          <div>
            <h4>Explore</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/donate">Donate</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/accessibility">Accessibility</Link></li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <div className="footer-contact">
              <a href="mailto:westsidesmiless@gmail.com">
                westsidesmiless@gmail.com
              </a>
              <a href="tel:+16469392590">(646) 939-2590</a>
              <a
                href="https://www.instagram.com/westsidesmiles_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @westsidesmiles_
              </a>
            </div>
          </div>

          <div>
            <h4>Support</h4>
            <ul>
              <li><Link to="/donate">Donate via Zelle</Link></li>
              <li><Link to="/donate">Drop off supplies</Link></li>
              <li><Link to="/events">Attend an event</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} West Side Smiles. Based in New York
          City.
        </div>
      </div>
    </footer>
  )
}

export default Footer
