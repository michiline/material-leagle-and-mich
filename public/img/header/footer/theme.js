const big = {
  fontSize: 2, //rem
  letterSpacing: 0.2, //rem
  height: 10,
  paddingSmall: 1,
  paddingBig: 2,
  marginSmall: 2.5, //rem,
  marginBig: 5 //rem,
}

const theme = {
  big: {
    height: `${big.height}rem`,
    fontSize: `${big.fontSize}rem`,
    letterSpacing: `${big.letterSpacing}rem`,
    paddingSmall: `${big.paddingSmall}rem`,
    paddingBig: `${big.paddingBig}rem`,
    marginSmall: `${big.marginSmall}rem`,
    marginBig: `${big.marginBig}rem`
  },
  medium: {
    height: `${big.height * 0.85}rem`,
    fontSize: `${big.fontSize * 0.8}rem`,
    letterSpacing: `${big.letterSpacing * 0.8}rem`,
    paddingSmall: `${big.paddingSmall * 0.75}rem`,
    paddingBig: `${big.paddingBig * 0.75}rem`,
    marginSmall: `${big.marginSmall * 0.75}rem`,
    marginBig: `${big.marginBig * 0.75}rem`,
  },
  small: {
    height: `${big.height * 0.75}rem`,
    fontSize: `${big.fontSize * 0.8}rem`,
    letterSpacing: `${big.letterSpacing * 0.8}rem`,
    paddingSmall: `${big.paddingSmall * 0.5}rem`,
    paddingBig: `${big.paddingBig * 0.5}rem`,
    marginSmall: `${big.marginSmall * 0.5}rem`,
    marginBig: `${big.marginBig * 0.5}rem`,
  },
}

export default theme
