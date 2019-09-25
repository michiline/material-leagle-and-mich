import React, { useRef, useState, useEffect } from 'react'
import _ from 'lodash'

export const useScrolledDirection = function () {
  const [scrollY, setScrollY] = useState(window.scrollY)
  const [scrolled, setScrolled] = useState(checkScrolled())
  useEffect(() => {
    const scrollListener = (e) => {
      if (window.scrollY === 0) {
        setScrolled(false)
      } else if (window.scrollY > scrollY) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
      setScrollY(window.scrollY)
    }
    const throttledScrollListener = _.throttle(scrollListener, 100, { leading: true, trailing: true})
    window.addEventListener('scroll', throttledScrollListener)
    return () => window.removeEventListener('scroll', throttledScrollListener)
  })
  return [scrolled]
}

const checkScrolled = () => {
  if (window.scrollY === 0) {
    return false
  } else if (window.scrollY > 0) {
    return true
  } else {
    return false
  }
}


export default useScrolledDirection
