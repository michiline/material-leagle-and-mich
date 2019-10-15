import React from 'react'
import styled from 'styled-components'
import { star } from '../../../images'
import { padding } from '../../../style'

export const ImgRow = styled.div`
  display: flex;
  padding: 0 0 ${padding.smallest} 0;
`

export const ImgWrap = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

export const ImgWrapPortrait = styled.div`
  width: 50%;
  height: auto;
  position: relative;
`

export const ImgWrapLandscape = styled.div`
  width: 50%;
  height: auto;
  position: relative;
`

export const ImgWrapPortraitLeft = styled(ImgWrapPortrait)`
  margin-right: ${padding.smallest};
`

export const ImgWrapLandscapeLeft = styled(ImgWrapLandscape)`
  margin-right: ${padding.smallest};
`

export const ImgPortraitHalf = styled.img.attrs(props => ({
  src: props.img.src
  }))`
  background-size: cover;
  overflow: hidden;
  width: 100%
  height: 100%;
  border-radius: 2px;
`

export const ImgLandscapeHalf = styled.img.attrs(props => ({
  src: props.img.src
  }))`
  background-size: cover;
  overflow: hidden;
  width: 100%
  height: 100%;
  border-radius: 2px;
`

export const Img = styled.img.attrs(props => ({
  src: props.img.src
  }))`
  background-size: cover;
  overflow: hidden;
  width: 100%
  height: 100%;
  border-radius: 2px;
`

export const StarBullet = styled.div`
  background-position: center;
  background-size: cover;
  background-image: url(${star});
  width: 3rem;
  height: 3rem;
  align-self: center;
  margin-right: ${padding.medium};
`
