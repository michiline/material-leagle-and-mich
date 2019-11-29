import React, { useRef, useState, useEffect } from 'react'
import _ from 'lodash'
import styled, { css, keyframes } from 'styled-components'

const useRipples = ({ componentRef, color }) => {
  const [ripples, setRipples] = useState([])
  useEffect(() => {
    const showRipple = (e) => {
      if (componentRef.current.contains(e.target)) {
        const width = componentRef.current.offsetWidth
        const height = componentRef.current.offsetHeight
        const pos = componentRef.current.getBoundingClientRect()
        const x = e.pageX - pos.left - (width / 2)
        const y = e.pageY - pos.top - (height / 2) - window.scrollY
        if (ripples.length > 0) {
          const newRipples = [...ripples, { x, y, width, height}]
          setRipples(newRipples)
        }
        else {
          setRipples([{ x, y, width, height}])
        }
      }
    }
    // const cleanUp = _.debounce(() => {
    //   if (ripples.length > 0) {
    //     const newRipples = ripples.shift()
    //     setRipples(newRipples)
    //   }
    // }, 1000)
    window.addEventListener('mousedown', showRipple)
    // window.addEventListener('mouseup', cleanUp)
    return () => {
      window.removeEventListener('mousedown', showRipple)
      // window.removeEventListener('mouseup', cleanUp)
    }
  })
  return [ripples, color]
}

export default useRipples
