import { useEffect, useRef, useState } from 'react'

function AnimatedStat({ value, suffix = '', label, duration = 1800 }) {
  const ref = useRef(null)
  const [display, setDisplay] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    let raf
    const start = performance.now()
    const tick = (now) => {
      const elapsed = now - start
      const t = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setDisplay(Math.round(eased * value))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [started, value, duration])

  return (
    <div ref={ref}>
      <span className="stat-number">
        {display}
        {suffix}
      </span>
      <div className="stat-label">{label}</div>
    </div>
  )
}

export default AnimatedStat
