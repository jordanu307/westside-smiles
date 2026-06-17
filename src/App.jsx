import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Events from './pages/Events.jsx'
import Donate from './pages/Donate.jsx'
import Contact from './pages/Contact.jsx'
import Accessibility from './pages/Accessibility.jsx'

function App() {
  const location = useLocation()
  const reduceMotion = useReducedMotion()

  const pageVariants = reduceMotion ? {} : {
    initial: { opacity: 0, y: 18 },
    enter:   { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
    exit:    { opacity: 0, y: -10, transition: { duration: 0.2, ease: 'easeIn' } },
  }

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          id="main-content"
          tabIndex={-1}
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <Routes location={location}>
            <Route path="/"              element={<Home />} />
            <Route path="/about"         element={<About />} />
            <Route path="/events"        element={<Events />} />
            <Route path="/donate"        element={<Donate />} />
            <Route path="/contact"       element={<Contact />} />
            <Route path="/accessibility" element={<Accessibility />} />
          </Routes>
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  )
}

export default App
