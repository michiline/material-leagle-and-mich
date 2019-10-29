import React from 'react'
import styled from 'styled-components'
import { FlexColumnCenterContainer} from '../../general'
import { padding } from '../../../style'

export const Container = styled.div`
  @media only screen and (max-width: 600px) {
    padding-top: 9rem;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const BlogContainer = styled(FlexColumnCenterContainer)`
  padding: ${padding.small};
  max-width: 70rem;
`
