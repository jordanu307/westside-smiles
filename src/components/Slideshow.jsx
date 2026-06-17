import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

function Slideshow({ images = [], interval = 4000, label = 'Photo slideshow' }) {
  const [index, setIndex]   = useState(0)
  const [paused, setPaused] = useState(false)
  const [dir, setDir]       = useState(1)
  const [inView, setInView] = useState(false)
  const touchStartX          = useRef(null)
  const rootRef              = useRef(null)
  const prefersReducedMotion = useRef(
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false
  )

  const isEmpty     = images.length === 0
  const hasMultiple = images.length > 1

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
    if (isEmpty || !hasMultiple || paused || !inView || prefersReducedMotion.current) return
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
      <div className="slideshow-empty" role="img" aria-label="Photos coming soon">
        <p className="slideshow-empty-text">Photos coming soon</p>
      </div>
    )
  }

  const slideVariants = prefersReducedMotion.current
    ? {
        enter:  () => ({ opacity: 0 }),
        center: { opacity: 1 },
        exit:   () => ({ opacity: 0 }),
      }
    : {
        enter:  (d) => ({ opacity: 0, x: d > 0 ? 48 : -48 }),
        center: { opacity: 1, x: 0 },
        exit:   (d) => ({ opacity: 0, x: d > 0 ? -48 : 48 }),
      }

  const slideTransition = prefersReducedMotion.current
    ? { duration: 0.15 }
    : { type: 'spring', damping: 30, stiffness: 300, mass: 0.8 }

  return (
    <div
      className="slideshow"
      ref={rootRef}
      role="region"
      aria-label={label}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {`Photo ${index + 1} of ${images.length}: ${label}`}
      </div>

      <div className="slideshow-viewport">
        <AnimatePresence mode="wait" initial={false} custom={dir}>
          <motion.div
            key={index}
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={slideTransition}
            className="slideshow-frame"
          >
            <img
              src={images[index]}
              alt={`${label}, photo ${index + 1} of ${images.length}`}
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
