import React from 'react'
import styled from 'styled-components'
import { Switch, Route, withRouter } from 'react-router-dom'

import { Home, SwipeGallery, GalleryRoute} from './components'

const Gallery = ({ match, location, hide, setHide }) => {

  return (
    <Switch>
      <Route exact path={match.path} component={Home} />
      <Route exact path={`${match.path}/:galleryName`} component={() => <GalleryRoute setHide={setHide} hide={hide}/>} />
    </Switch>
  )
}

export default withRouter(Gallery)
