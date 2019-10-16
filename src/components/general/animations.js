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

export const bounce = () => {
  return keyframes`
    0%   { transform: scale(1,1)      translateY(0); }
    10%  { transform: scale(1.1,.9)   translateY(0); }
    30%  { transform: scale(.9,1.1)   translateY(10vw); }
    50%  { transform: scale(1.05,.95) translateY(0); }
    57%  { transform: scale(1,1)      translateY(1vw); }
    64%  { transform: scale(1,1)      translateY(0); }
    100% { transform: scale(1,1)      translateY(0); }
  `
}
