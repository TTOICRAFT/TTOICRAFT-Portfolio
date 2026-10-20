import { useCallback, useEffect, useRef, useState } from 'react'
import Ring3D from './Ring3D'
import FollowEyes from './FollowEyes'

/** A brief, interactive welcome screen shown before the portfolio. */
export default function Loader({ onDone, textTop = "Owolabi Israel's Portfolio", textSub = 'Data Analyst · Business-focused insights' }) {
  const [exiting, setExiting] = useState(false)
  const wrapRef = useRef(null)
  const finishRef = useRef(() => {})
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const finish = useCallback(() => {
    if (finishRef.current.done) return
    finishRef.current.done = true
    setExiting(true)
    finishRef.current.timer = window.setTimeout(() => onDone?.(), 500)
  }, [onDone])

  useEffect(() => {
    const html = document.documentElement
    const body = document.body
    const prevHtml = html.style.overflow
    const prevBody = body.style.overflow
    html.style.overflow = 'hidden'
    body.style.overflow = 'hidden'
    finishRef.current.done = false

    const handleKey = (event) => {
      if (event.key === 'Escape' || event.key === 'Enter' || event.key === ' ') finish()
    }
    const handleWheel = () => finish()
    const handleClick = () => finish()
    const handleTouch = () => finish()
    const autoTimer = window.setTimeout(finish, 15000)
    window.addEventListener('keydown', handleKey)
    window.addEventListener('wheel', handleWheel, { passive: true, once: true })
    window.addEventListener('click', handleClick, { once: true })
    window.addEventListener('touchstart', handleTouch, { once: true, passive: true })

    return () => {
      window.clearTimeout(autoTimer)
      window.clearTimeout(finishRef.current.timer)
      window.removeEventListener('keydown', handleKey)
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('click', handleClick)
      window.removeEventListener('touchstart', handleTouch)
      html.style.overflow = prevHtml
      body.style.overflow = prevBody
    }
  }, [finish])

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const handle = (event) => {
      const rect = el.getBoundingClientRect()
      const nx = Math.max(-1, Math.min(1, (event.clientX - rect.left - rect.width / 2) / (rect.width / 2)))
      const ny = Math.max(-1, Math.min(1, (event.clientY - rect.top - rect.height / 2) / (rect.height / 2)))
      setTilt({ x: -ny, y: nx })
      el.style.transform = `rotateX(${-ny * 7}deg) rotateY(${nx * 7}deg)`
    }
    const reset = () => {
      el.style.transform = 'rotateX(0deg) rotateY(0deg)'
      setTilt({ x: 0, y: 0 })
    }
    window.addEventListener('pointermove', handle)
    window.addEventListener('pointerleave', reset)
    return () => {
      window.removeEventListener('pointermove', handle)
      window.removeEventListener('pointerleave', reset)
    }
  }, [])

  return (
    <div className={`loader-root fixed inset-0 z-[100] ${exiting ? 'loader-exit' : ''}`} role="dialog" aria-modal="true" aria-label="Welcome to Owolabi Israel's portfolio">
      <Ring3D tilt={tilt} />
      <div className="absolute inset-x-0 top-0 z-[3] flex justify-center pt-[76px]"><FollowEyes /></div>
      <div className="loader-3d">
        <div ref={wrapRef} className="loader-layers">
          <h1 className="loader-title" style={{ transform: 'translateZ(80px)' }}>{textTop}</h1>
          <p className="loader-subtitle" style={{ transform: 'translateZ(40px)' }}>{textSub}</p>
        </div>
      </div>
      <button type="button" className="loader-hint" onClick={finish}>Enter portfolio <span aria-hidden="true">↗</span></button>
    </div>
  )
}
