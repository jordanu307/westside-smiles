import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

function Slideshow({ images = [], interval = 4000 }) {
  const [index, setIndex]   = useState(0)
  const [paused, setPaused] = useState(false)
  const [dir, setDir]       = useState(1)
  const [inView, setInView] = useState(false)
  const touchStartX         = useRef(null)
  const rootRef             = useRef(null)

  const isEmpty     = images.length === 0
  const hasMultiple = images.length > 1

  /* Only auto-advance when the slideshow is centered in the viewport */
  useEffect(() => {
    const el = rootRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => setInView(e.isIntersecting),
      { threshold: 0.5 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const goTo = (i, d = 1) => {
    setDir(d)
    setIndex(((i % images.length) + images.length) % images.length)
  }
  const next = () => goTo(index + 1,  1)
  const prev = () => goTo(index - 1, -1)

  useEffect(() => {
    if (isEmpty || !hasMultiple || paused || !inView) return
    const t = setTimeout(next, interval)
    return () => clearTimeout(t)
  }, [index, paused, inView, isEmpty, hasMultiple, images.length, interval])

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX }
  const onTouchEnd   = (e) => {
    if (touchStartX.current === null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(dx) > 40) dx > 0 ? prev() : next()
    touchStartX.current = null
  }

  if (isEmpty) {
    return (
      <div className="slideshow-empty">
        <p className="slideshow-empty-text">Photos coming soon</p>
      </div>
    )
  }

  return (
    <div
      className="slideshow"
      ref={rootRef}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="slideshow-viewport">
        <AnimatePresence mode="wait" initial={false} custom={dir}>
          <motion.div
            key={index}
            custom={dir}
            variants={{
              enter:  (d) => ({ opacity: 0, x: d > 0 ? 48 : -48 }),
              center: { opacity: 1, x: 0 },
              exit:   (d) => ({ opacity: 0, x: d > 0 ? -48 : 48 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: 'spring', damping: 30, stiffness: 300, mass: 0.8 }}
            className="slideshow-frame"
          >
            <img
              src={images[index]}
              alt={`Event photo ${index + 1}`}
              loading={index === 0 ? 'eager' : 'lazy'}
              className="slideshow-img"
            />
          </motion.div>
        </AnimatePresence>

        {hasMultiple && (
          <>
            <button className="slide-btn prev" onClick={prev} aria-label="Previous photo">&#8249;</button>
            <button className="slide-btn next" onClick={next} aria-label="Next photo">&#8250;</button>
          </>
        )}
      </div>
    </div>
  )
}

export default Slideshow
