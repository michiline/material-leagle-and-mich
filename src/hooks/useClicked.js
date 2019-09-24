import React, { useRef, useState, useEffect } from 'react'
import _ from 'lodash'
import styled, { css, keyframes } from 'styled-components'

const useClicked = ({ yesRef, noRefs }) => {
  const [clicked, setClicked] = useState(false)
  useEffect(() => {
    const mouseDownListener = (e) => {
      if (yesRef.current.contains(e.target) && checkNoRefs({e, refs: noRefs})) {
        setClicked(!clicked)
      } else if (!yesRef.current.contains(e.target)) {
        setClicked(false)
      }
    }
    window.addEventListener('mousedown', mouseDownListener)
    return () => window.removeEventListener('mousedown', mouseDownListener)
  })
  return [clicked, setClicked]
}

const checkNoRefs = ({ refs, e }) => {
  for (let ref of refs) {
    if (ref.current.contains(e.target)) {
      return false
    }
  }
  return true
}

export default useClicked
