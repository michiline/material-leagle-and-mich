import React, { useRef, useState, useEffect } from 'react'
import _ from 'lodash'

export const useScrolledDirection = function () {
  const [scrolled, setScrolled] = useState(window.scrollY)
  const [scrollDirection, setScrollDirection] = useState('none')
  useEffect(() => {
    const scrollListener = (e) => {
      window.scrollY > scrolled ? setScrollDirection('down') : setScrollDirection('up')
      setScrolled(window.scrollY)
    }
    const throttledScrollListener = _.throttle(scrollListener, 100, { leading: true, trailing: true})
    window.addEventListener('scroll', throttledScrollListener)
    return () => window.removeEventListener('scroll', throttledScrollListener)
  })
  return [scrollDirection]
}


export default useScrolledDirection
