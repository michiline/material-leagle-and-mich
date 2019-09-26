import React, { useState, useEffect } from 'react'

const useSlide = function (imagesCount) {
  const [imgId, setImgId] = useState(-1)
  const [timerId, setTimerId] = useState('')

  const setSlide = (id) => {
    setImgId(id)
    clearInterval(timerId)
    setTimerId(setInterval(setSlide, 5000, (id + 1) % imagesCount))
  }
  useEffect(() => {
    if (!timerId) {
      setSlide((imgId + 1) % imagesCount)
    }
    return () => clearInterval(timerId)
  })
  return [imgId, setSlide]
}

export default useSlide
