import React from 'react'
import styled from 'styled-components'
import { FlexColumnCenterContainer} from '../../general'
import { padding } from '../../../style'

export const Container = styled.div`
  @media only screen and (max-width: 600px) {
    padding-top: 9rem;
  }

`

export const BlogContainer = styled(FlexColumnCenterContainer)`
  padding: ${padding.small};
  max-width: 66rem;
  margin-left: auto;
  margin-right: auto;
`
