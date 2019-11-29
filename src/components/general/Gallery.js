import React, { Component, useRef } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import styled, { css } from 'styled-components'
import justifiedLayout from 'justified-layout'
import $ from 'jquery'
import { FlexColumnCenterContainer } from './containers'
import { H3 } from './text'
import { padding, shadow } from '../../style'
import { imageBundleRatioHome, refresh } from '../../images'
import { BigIcon } from './images'
import { RippleComponent } from '../../hooks'

window.jQuery = $
window.$ = $

class Gallery extends Component {
  render () {
    const { history, url, text, images, setShow, setImageId, setImages } = this.props
    const refreshRef = React.createRef()
    return (
      <Container>
        <HeaderContainer>
          <Header onClick={ e => to({ history, url })}>{text}</Header>
          {setImages && <RippleComponent componentRef={refreshRef} Component={RefreshIcon} color={'#8B4608'} img={refresh} onClick={e => refreshClick({ setImages })} />}
        </HeaderContainer>

        {images.length > 0 &&
        <GalleryContainer>
          {this.renderImages({ images, setShow, setImageId, history })}
        </GalleryContainer>}
      </Container>
    )
  }
  // return (
  //   <Container>
  //     <HeaderContainer>
  //       <Header onClick={ e => to({ history, url })}>{text}</Header>
  //       {setImages && <RefreshIcon img={refresh} onClick={e => refreshClick({ setImages })} />}
  //     </HeaderContainer>
  //
  //     {images.length > 0 &&
  //     <GalleryContainer>
  //       {this.renderImages({ images, setShow, setImageId, history })}
  //     </GalleryContainer>}
  //   </Container>
  // )

  async componentDidMount() {
    window.addEventListener('resize', this.resizeListener.bind(this))
    await sleep(250)
    if (this.props.hide) {
      window.$('#gallery').justifiedGallery({ rowHeight: getRowHeight(), lastRow: 'hide', margins: 5 })
    } else {
      window.$('#gallery').justifiedGallery({ rowHeight: getRowHeight(), margins: 5 })
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeListener)
  }

  renderImages = ({ images, setShow, setImageId, history }) => images.map((image, index) => {
    if (setShow) {
      return (
        <ImageContainer key={Date.now()} onClick={e => imageClick({ setShow, setImageId, id: index })}>
          <Image img={image}/>
        </ImageContainer>
      )
    } else {
      return (
        <ImageContainer key={index} onClick={e => to({ history, url: image.url})}>
          <Image img={image}/>
        </ImageContainer>
      )
    }
  })

  resizeListener = () => {
    window.$('#gallery').justifiedGallery({ rowHeight: getRowHeight(), lastRow: 'hide', margins: 5 })
  }
}

const imageClick = ({ setShow, setImageId, id }) => {
  setImageId(id)
  setShow(true)
}

const refreshClick = async ({ setImages }) => {
  setImages([])
  await sleep(1)
  setImages(imageBundleRatioHome({ length: 30 }))
  window.$('#gallery').justifiedGallery({ rowHeight: getRowHeight(), lastRow: 'hide', margins: 5 })
}

const getRowHeight = () => {
  const width = window.innerWidth
  if (width < 375) {
    return 100
  } else if (width >= 375 && width < 500) {
    return 125
  }
  else if (width >= 500 && width < 750) {
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

const Container = styled(FlexColumnCenterContainer)`
`

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Header = styled.p`
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
`

const RefreshIcon = styled(BigIcon)`
  border-radius: 50%;
  &:hover {
    background-color: #8B46081E;
  }
  &:focus {
    outline: none;
  }
  div:not(:focus):hover {
    background-color: transparent;
  }
  position: relative;
  overflow: hidden;
  align-self: center;
  margin-top: 3px;
  &:active {
    transform: translateY(2px);
  }
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -webkit-tap-highlight-color: transparent;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

const GalleryContainer = styled.div.attrs({
  id: 'gallery'
  })
`
  margin-top: calc(${padding.small} - 2px);
`

const ImageContainer = styled.div`
  cursor: pointer;
`

const Image = styled.img.attrs(props => ({
  src: props.img.src,
  alt: props.img.alt
  }))`
`

const A = styled.a.attrs(props => ({
  href: props.img.url
}))``

const to = ({ history, url }) => {
  history.push(url)
}

export default withRouter(Gallery)
