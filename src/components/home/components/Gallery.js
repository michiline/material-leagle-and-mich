import React, { Component } from 'react'
import axios from 'axios'
import styled, { css } from 'styled-components'
import justifiedLayout from 'justified-layout'
import $ from 'jquery'
import * as G from '../../general'
import { padding, shadow } from '../../../style'

window.jQuery = $
window.$ = $

class Gallery extends Component {
  state = {
    images: []
  }
  render () {
    return (
      <Container>
        <Header>Travel Gallery</Header>
        <GalleryContainer>
          {this.state.images && this.state.images.length !== 0 && this.renderImages(this.state.images)}
        </GalleryContainer>
      </Container>
    )
  }

  async componentDidMount() {
    const ratios = await getRatios({ url: '/gallery/front' })
    const images = getImages({ url: '/gallery/front', length: ratios.data.length })
    this.setState({ images })
    window.addEventListener('resize', this.resizeListener.bind(this))
    try {
      window.$('#gallery').justifiedGallery({ rowHeight: getRowHeight(), lastRow: 'hide', margins: 5 })
    } catch (err) {
      await sleep(250)
      window.$('#gallery').justifiedGallery({ rowHeight: getRowHeight() })
    }
  }

  renderImages = (images) => images.map((image, index) => {
    return (
      <A img={image} key={index}>
        <Image img={image} />
      </A>
    )
  })

  resizeListener = () => {
    window.$('#gallery').justifiedGallery({ rowHeight: getRowHeight(), lastRow: 'hide', margins: 5 })
  }
}

const getRowHeight = () => {
  const width = window.innerWidth
  if (width < 500) {
    return 125
  } else if (width >= 500 && width < 750) {
    return 150
  } else if (width >= 750 && width < 1000) {
    return 175
  } else if (width >= 1000 && width < 1250) {
    return 200
  } else {
    return 225
  }
}

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const Container = styled(G.flexColumnCenterContainer)`
`

const Header = styled(G.H3)`
  padding: ${padding.medium};
  font-family: 'Amatic SC';
  font-weight: 700;
`

const GalleryContainer = styled.div.attrs({
  id: 'gallery'
  })
`
`

const Image = styled.img.attrs(props => ({
  src: props.img.src,
  alt: props.img.alt
  }))`
`

const A = styled.a.attrs(props => ({
  href: props.img.src
}))``

const getImages = ({ url, length}) => [...Array(length)].map((img, index) => {return { id: index, alt: 'Image', src: `${process.env.REACT_APP_SERVER}/images/${url}/${index + 1}.jpg` }})

const getRatios = ({ url }) => axios({
  method: 'get',
  url: `${process.env.REACT_APP_SERVER}/sizes${url}`
})

export default Gallery
