import React from 'react'
import styled from 'styled-components'
import { FlexColumnCenterContainer} from '../../general'
import { padding } from '../../../style'

export const Container = styled.div`
  @media only screen and (max-width: 750px) {
    padding-top: 7rem;
  }
`

export const BlogContainer = styled(FlexColumnCenterContainer)`
  padding: ${padding.medium};
`
