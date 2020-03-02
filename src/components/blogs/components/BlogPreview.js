import React from 'react'
import styled from 'styled-components'
import { SmallCardGrid } from '../../general'
import { shadow, padding } from '../../../style'
import { getCardsImages } from '../../../images'

const Component = () => {
  const blogPreviews = getBlogPreviews({ cards: getCardsImages(), url: '/blogs/srilanka-10'})

  return (
    <Root>
      <SmallCardGrid header={'Želiš još?'} url={'/blogs'} content={blogPreviews} />
    </Root>
  )
}

const Root = styled.div`

`

const getBlogPreviews = ({ cards, url }) => {
  let pickedCards = []
  return (
    [...Array(2)].map((preview, index) => {
      let card = cards[Math.floor(Math.random() * (cards.length - 1))]
      while (card.url === url || (pickedCards.length !== 0 && card.url === pickedCards[0].url)) {
        card = cards[Math.floor(Math.random() * (cards.length - 1))]
      }
      pickedCards.push(card)
      return card
    })
  )
}

export default Component
