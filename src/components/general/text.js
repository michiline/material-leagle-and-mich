import styled from 'styled-components'
import { padding } from '../../style'

export const H1 = styled.h1`
  font-size: 9.6rem;
  font-weight: 100;
  letter-spacing: -0.15rem;
  line-height: 1.6;
`

export const H2 = styled.h2`
  font-size: 6rem;
  font-weight: 100;
  letter-spacing: -0.05rem;
  line-height: 1.6;
`

export const H3 = styled.h3`
  font-size: 4.8rem;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 1.6;
`

export const H4 = styled.h4`
  font-size: 3.45rem;
  font-weight: 400;
  letter-spacing: 0.025rem;
  line-height: 1.6;
`

export const H5 = styled.h5`
  font-size: 2.4rem;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 1.6;
`

export const H6 = styled.h6`
  font-family: 'Roboto';
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 0.0125rem;
  line-height: 1.6;
`

export const Subtitle1 = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  letter-spacing: 0.015rem;
  line-height: 1.4;
`

export const Subtitle2 = styled.p`
  font-family: 'Roboto';
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: 0.01rem;
  line-height: 1.4;
`

export const Body1 = styled.p`
  font-family: 'Roboto';
  font-size: 1.6rem;
  font-weight: 400;
  letter-spacing: 0.05rem;
  line-height: 1.4;
`

export const Body2 = styled.p`
  font-family: 'Roboto';
  font-size: 1.4rem;
  font-weight: 400;
  letter-spacing: 0.025rem;
  line-height: 1.4;
`

export const Button = styled.button`
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: 0.125rem;
  line-height: 1.4;
  text-transform: uppercase;
  border-radius: 4px;
  cursor: pointer;
`

export const ButtonTransparent = styled(Button)`
  background-color: transparent;
  color: #8B4608;
  border: none;
  &:hover {
    background-color: #8B46081E;
  }
  &:focus {
    outline: none;
  }
`

export const Caption = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  letter-spacing: 0.04rem;
  line-height: 1.4;
`

export const Overline = styled.p`
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.15rem;
  line-height: 1.4;
  text-transform: uppercase;
`
