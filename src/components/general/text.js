import styled from 'styled-components'
import { padding } from '../../style'

const H1 = styled.h1`
  font-size: 9.6rem;
  font-weight: 100;
  letter-spacing: -0.15rem;
  line-height: 1.6;
`

const H2 = styled.h2`
  font-size: 6rem;
  font-weight: 100;
  letter-spacing: -0.05rem;
  line-height: 1.6;
`

const H3 = styled.h3`
  font-size: 4.8rem;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 1.6;
`

const H4 = styled.h4`
  font-size: 3.45rem;
  font-weight: 400;
  letter-spacing: 0.025rem;
  line-height: 1.6;
`

const H5 = styled.h5`
  font-size: 2.4rem;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 1.6;
`

const H6 = styled.h6`
  font-family: 'Roboto';
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 0.0125rem;
  line-height: 1.6;
`

const Subtitle1 = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  letter-spacing: 0.015rem;
  line-height: 1.4;
`

const Subtitle2 = styled.p`
  font-family: 'Roboto';
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: 0.01rem;
  line-height: 1.4;
`

const Body1 = styled.p`
  font-family: 'Roboto';
  font-size: 1.6rem;
  font-weight: 400;
  letter-spacing: 0.05rem;
  line-height: 1.4;
`

const Body2 = styled.p`
  font-family: 'Roboto';
  font-size: 1.4rem;
  font-weight: 400;
  letter-spacing: 0.025rem;
  line-height: 1.4;
`

const Button = styled.button`
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: 0.125rem;
  line-height: 1.4;
  text-transform: uppercase;
  border-radius: 4px;
  cursor: pointer;
`

const ButtonTransparent = styled(Button)`
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

const Caption = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  letter-spacing: 0.04rem;
  line-height: 1.4;
`

const Overline = styled.p`
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.15rem;
  line-height: 1.4;
  text-transform: uppercase;
`

export { H1, H2, H3, H4, H5, H6, Subtitle1, Subtitle2, Body1, Body2, Button, ButtonTransparent, Caption, Overline }
