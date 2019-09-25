import React, { useRef, useState, useEffect } from 'react'
import _ from 'lodash'

const useScrolled = function ({ boundary }) {
  const [scrolled, setScrolled] = useState(window.scrollY > boundary)
  useEffect(() => {
    const scrollListener = (e) => {
      setScrolled(window.scrollY > boundary)
    }
    const throttledScrollListener = _.throttle(scrollListener, 100, { leading: true, trailing: true})
    window.addEventListener('scroll', throttledScrollListener)
    return () => window.removeEventListener('scroll', throttledScrollListener)
  })
  return [scrolled, setScrolled]
}

export default useScrolled
