import { keyframes } from 'styled-components'

export const slideAppear = ({x1, y1, z1, x2, y2, z2}) => {
  return keyframes`
    0% {
      transform: translate3d(${x1}px, ${y1}px, ${z1}px);
      opacity: 0;
    }

    100% {
      transform: translate3d(${x2}px, ${y2}px, ${z2}px);
      opacity: 1;
    }
  `
}
