import React from 'react'
import styled from 'styled-components'
import { useTheme2 } from '../../effects'
import themeSizes from './theme'

const Footer = () => {
  const [theme] = useTheme2({ theme: themeSizes, boundaries: [800, 1100]})
  return (
    <Container {...theme}>
      <Header {...theme}>© 2019 leagle & mich </Header>
    </Container>
  )
}

const Container = styled.div(({ height, paddingBig}) => `
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${height};
  padding: ${paddingBig};
  background: #1F2126;
`)

const Header = styled.p(({ fontSize, letterSpacing, paddingBig}) => `
  font-size: ${fontSize};
  letter-spacing: ${letterSpacing};
  color: #A0A6AB;
  text-transform: uppercase;
  padding: ${paddingBig};
`)

export default Footer
