import React, { useEffect, useRef, cloneElement } from 'react'
import gsap from 'gsap'

export default function Magnetic({ children }) {
  const magnetic = useRef(null)

  useEffect(() => {
    const xTo = gsap.quickTo(magnetic.current, 'x', {
      duration: 1,
      ease: 'elastic.out(1, 0.3)',
    })
    const yTo = gsap.quickTo(magnetic.current, 'y', {
      duration: 1,
      ease: 'elastic.out(1, 0.3)',
    })

    const handleMouseMove = e => {
      const { clientX, clientY } = e
      const { height, width, left, top } = magnetic.current.getBoundingClientRect()
      const x = clientX - (left + width / 2)
      const y = clientY - (top + height / 2)
      xTo(x * 0.35)
      yTo(y * 0.35)
    }
    const handleMouseLeave = () => {
      xTo(0)
      yTo(0)
    }
    const node = magnetic.current
    node.addEventListener('mousemove', handleMouseMove)
    node.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      node.removeEventListener('mousemove', handleMouseMove)
      node.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  // Ensure only one child
  if (React.Children.count(children) !== 1) {
    console.warn('Magnetic expects a single React element as its child.')
    return null
  }

  return cloneElement(children, { ref: magnetic })
}
