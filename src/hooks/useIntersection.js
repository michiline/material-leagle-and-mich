import React, { useState, useEffect } from 'react'

const useIntersection = function ({ elements, threshold}) {
  const [visible, setVisible] = useState([...Array(elements.length)].map(() => false))
  let observers = []
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: [0, threshold]
    }
    const intersectionCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > observerOptions.threshold[1]) {
          visible[entry.target.id] = true
          setVisible([...visible])
        } else if (entry.intersectionRatio === observerOptions.threshold[0]) {
          visible[entry.target.id] = false
          setVisible([...visible])
        }
      })
    }
    elements.forEach(element => {
      if (element.current) {
        const observer = new IntersectionObserver(intersectionCallback, observerOptions)
        observer.observe(element.current)
        observers.push(observer)
      } else {
        const observer = new IntersectionObserver(intersectionCallback, observerOptions)
        observer.observe(element)
        observers.push(observer)
      }

    })
    return () => observers.forEach(observer => observer.disconnect())
  }, [])
  return [visible, setVisible]
}

export default useIntersection
