import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

const NF = 30
const TFN = {
	'ease-in-out': (k) => .5*(Math.sin((k - .5)*Math.PI) + 1)
}

class SwipeGallery extends Component {
  state = {
    _C: '',
    N: '',
    i: 0,
    x0: null,
    locked: false,
    w: window.innerWidth,
    ini: '',
    fin: '',
    rID: null,
    anf: '',
    n: ''
  }
  render () {
    const images = 5
    return (
      <Container>
        <Img src='https://images.unsplash.com/photo-1514117445516-2ecfc9c4ec90?ixlib=rb-0.3.5&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ&amp;s=0e0b58fcf67fa6e8a010322d617e39af' alt='Mountain massif, sunbathed, partly covered in show.'/>
        <Img src='https://images.unsplash.com/photo-1510325805092-2951ab330b7d?ixlib=rb-0.3.5&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ&amp;s=017cf46443f4821a375c20e8c68e37f0' alt='Tiny bird with pale brown, orange and white feathers in an evergreen tree.'/>
        <Img src='https://images.unsplash.com/photo-1514848567240-a81cb051807a?ixlib=rb-0.3.5&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ&amp;s=3a0e476ab712db0eb68ab121a21c54de' alt='Close-up of yellow rose opening up.'/>
        <Img src='https://images.unsplash.com/photo-1465408522361-a6f502298219?ixlib=rb-0.3.5&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ&amp;s=7a6bd1244c42d1dbd3984a4c13981666' alt='Fast and foamy creek in the middle of the forest.'/>
        <Img src='https://images.unsplash.com/photo-1503843778847-2b8bdce2ed3d?ixlib=rb-0.3.5&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ&amp;s=d547781176ce182eeeb7303bac05abf4' alt='Fluffy little tabby with blue eyes climbing up a tree.'/>
      </Container>
    )
  }
  componentDidMount() {
    const _C = document.querySelector('#container')
    const N = _C.children.length
    _C.style.setProperty('--n', _C.children.length)
    _C.addEventListener('mousedown', this.lock.bind(this), false)
    _C.addEventListener('touchstart', this.lock.bind(this), false)

    _C.addEventListener('mousemove', this.drag.bind(this), false)
    _C.addEventListener('touchmove', this.drag.bind(this), false)

    _C.addEventListener('mouseup', this.move.bind(this), false)
    _C.addEventListener('touchend', this.move.bind(this), false)
    this.setState({ _C, N })
  }


  stopAni = () => {
    cancelAnimationFrame(this.state.rID)
    this.state.rID = null
  }

  ani = (cf = 0) => {
    this.state._C.style.setProperty('--i', this.state.ini + ( this.state.fin -  this.state.ini)*TFN['ease-in-out'](cf/ this.state.anf))

    if(cf ===  this.state.anf) {
      this.stopAni()
      return
    }

    this.setState({
      rID: requestAnimationFrame(this.ani.bind(this, ++cf))
    })
  }

  unify = (e) => e.changedTouches ? e.changedTouches[0] : e

  lock = (e) => {
    this.setState({
      x0: this.unify(e).clientX,
      locked: true
    })
  }

  drag = (e) => {
    e.preventDefault()

    if(this.state.locked) {
      let dx = this.unify(e).clientX - this.state.x0
      let f = +(dx/this.state.w).toFixed(2)
      this.state._C.style.setProperty('--i', this.state.i - f)
    }
  }

  move = (e) => {
    if(this.state.locked) {
      let dx = this.unify(e).clientX - this.state.x0
      let s = Math.sign(dx)
      let f = +(s*dx/this.state.w).toFixed(2)

      this.setState({
        ini: this.state.i - s*f
      })
      if((this.state.i > 0 || s < 0) && (this.state.i < this.state.N - 1 || s > 0) && f > .2) {
        this.setState({
          i: this.state.i - s
        })
        f = 1 - f
      }

      this.setState({
        fin: this.state.i,
        anf: Math.round(f*NF),
        n: 2 + Math.round(f)
      })
      this.ani()
      this.setState({
        x0: null,
        locked: false
      })
    }
  }
}

const Container = styled.div.attrs({
  id: 'container'
  })
`
  --n: 1;
  display: flex;
  align-items: center;
  overflow-y: hidden;
  width: 100%;
  width: calc(var(--n)*100%);
  height: 100%;
  max-height: 100vh;
  transform: translate(calc(var(--i, 0)/var(--n)*-100%));
`

const Img = styled.img`
  width: 100%;
  width: calc(100%/var(--n));
  user-select: none;
  pointer-events: none;
`

export default withRouter(SwipeGallery)
