import React from 'react'
import styled from 'styled-components'
import { H3, H5, H6, Body1, Body2, Overline } from '../../general'
import {  star } from '../../../images'
import { padding, margin } from '../../../style'

export const Header = styled.p`
  font-size: 4.8rem;
  letter-spacing: 0;
  line-height: 1.6;
  padding: ${padding.medium};
  font-family: 'Amatic SC';
  font-weight: 700;
  &:active {
    transform: translateY(2px);
  }
  cursor: pointer;
  text-align: center;
`

export const Intro = styled(Body1)`
  color: rgba(0, 0, 0, 0.54);
  font-family: 'Montserrat';
  text-align: justify;
  font-style: italic;
  padding: ${padding.small} 0 ${padding.small} 0;
`

export const Text = styled(Body1)`
  font-family: 'Montserrat';
  text-align: justify;
  padding: ${padding.small} 0 ${padding.small} 0;
`

export const Header2 = styled(H5)`
  font-family: 'Montserrat';
  font-style: italic;
  align-self: start;
  padding: ${padding.medium} 0 ${padding.medium} 0;
`

export const Header3 = styled(H6)`
  align-self: center;
  font-family: 'Montserrat';
`

export const BulletHeaderContainer = styled.div`
  display: flex;
  align-self: flex-start;
  width: max-content;
  padding: ${padding.medium} 0 ${padding.medium} 0;
`

export const ImgOverlay = styled(Overline)`
  position: absolute;
  bottom: 0;
  background-color: #0000007D;
  width: 100%;
  color: #B09978;
  display: flex;
  justify-content: flex-end;
  padding: ${padding.smallest};
`
