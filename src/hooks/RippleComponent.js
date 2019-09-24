import React, { useRef, useState, useEffect } from 'react'
import _ from 'lodash'
import styled, { css, keyframes } from 'styled-components'

const RippleComponent = ({ Component, componentRef, value, ...props }) => {
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
    const cleanUp = _.debounce(() => {
      if (ripples.length > 0) {
        const newRipples = ripples.shift()
        setRipples(newRipples)
      }
    }, 1000)
    window.addEventListener('mousedown', showRipple)
    window.addEventListener('mouseup', cleanUp)
    return () => {
      window.removeEventListener('mousedown', showRipple)
      window.removeEventListener('mouseup', cleanUp)
    }
  })
  if (value) {
    return (
      <Component ref={componentRef} {...props}>{value}
        {ripples.length > 0 && ripples.map((ripple, index) => <Ripple {...ripple} key={index}/>)}
      </Component>
    )
  } else {
    return (
      <Component ref={componentRef} {...props}>
        {ripples.length > 0 && ripples.map((ripple, index) => <Ripple {...ripple} key={index}/>)}
      </Component>
    )
  }
}

const ripple = keyframes`
  to {
    opacity: 0.0;
    transform: scale(3);
  }
`

const Ripple = styled.span`
  position: absolute;
  transform: scale(0);
  opacity: 0.75;
  background-color: #8B46087D;
  border-radius: 100%;
  animation: ${ripple} 400ms;
  top: ${props => props.y}px;
  left: ${props => props.x}px;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`

export default RippleComponent
