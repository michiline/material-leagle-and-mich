import React from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'

import { Home, SwipeGallery, GalleryRoute} from './components'

const Gallery = ({ match }) => {
  return (
    <Switch>
      <Route exact path={match.path} component={Home} />
      <Route exact path={`${match.path}/:galleryName`} component={GalleryRoute} />
      <Route exact path={`${match.path}/:galleryName/swipe/:id`} component={SwipeGallery} />
    </Switch>
  )
}

export default Gallery
