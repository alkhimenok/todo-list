import styled, { createGlobalStyle } from 'styled-components'
import { getDisplayFlex, forChildren } from './utils/styled'
import * as UNITS from './constants/units'
import * as FONTS from './constants/fonts'
import * as COLORS from './constants/colors'
import * as BORDERS from './constants/borders'
import * as BREAKPOINTS from './constants/breakpoints'

const Reset = createGlobalStyle`
  ${require('reset-css')};
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }
  html,
  body,
  input,
  button {
    font-family: ${FONTS.PRIMARY};
    color: ${COLORS.PRIMARY};
  }
  i {
    line-height: 0;
  }
  @media screen and (min-width: ${BREAKPOINTS.SM_MIN}) {
    html,
    body,
    input,
    button {
      font-size: 10px
    }
  }
  @media screen and (max-width: ${BREAKPOINTS.XS_MAX}) {
    html,
    body,
    input,
    button {
      font-size: calc(0px + 10 * (100vw / ${parseInt(BREAKPOINTS.XS_MAX)}));
    }
  }
`
const Fonts = createGlobalStyle`
  @font-face {
    font-family: 'interRegular';
    src: url(${require('./assets/fonts/Inter-Regular.ttf')});
  }
  @font-face {
    font-family: 'interSemiBold';
    src: url(${require('./assets/fonts/Inter-SemiBold.ttf')});
  }
  @font-face {
    font-family: 'interBold';
    src: url(${require('./assets/fonts/Inter-Bold.ttf')});
  }
`
const Icons = createGlobalStyle`
  @font-face {
    font-family: 'icons';
    src:  url(${require('./assets/icons/icons.ttf')});
    /* src:  url('./assets/icons/icons.eot?mbjhc7');
    src:  url('./assets/icons/icons.eot?mbjhc7#iefix') format('embedded-opentype'),
      url('./assets/icons/icons.ttf?mbjhc7') format('truetype'),
      url('./assets/icons/icons.woff?mbjhc7') format('woff'),
      url('./assets/icons/icons.svg?mbjhc7#icons') format('svg'); */
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }
  [class^="icon-"]::before, [class*=" icon-"]::before {
    font-family: 'icons' !important;
    speak: never;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .icon-bin:before {
    content: "\\e900";
  }
  .icon-drag:before {
    content: "\\e901";
  }
  .icon-pencil:before {
    content: "\\e902";
  }
`

const Wrapper = styled.div`
	min-width: 100vw;
	min-height: 100vh;
	${getDisplayFlex('center', 'space-between', 'column')}
	padding: ${UNITS.XS_SIZE};
	${forChildren('width: 100%;')}
	background: ${COLORS.PRIMARY_GRADIENT};
	overflow: hidden;
`
const Content = styled.div`
	max-width: ${UNITS.MAX_WIDTH};
	max-height: ${UNITS.MAX_HEIGHT};
	margin: auto;
	background-color: ${COLORS.TERTIARY};
	border-radius: ${BORDERS.RADIUS_OVAL};
`
const Container = styled.div`
	max-width: calc(${UNITS.CONTAINER_WIDTH} + ${UNITS.XL_SIZE} * 2);
	margin: 0 auto;
`
const Body = styled.div`
	padding: ${UNITS.XL_SIZE};
	@media screen and (min-height: calc(${UNITS.MAX_HEIGHT} + ${parseFloat(
			UNITS.XS_SIZE
		)} * 20px)) {
		height: ${UNITS.MAX_HEIGHT};
	}
	@media screen and (max-height: calc(${UNITS.MAX_HEIGHT} + ${parseFloat(
			UNITS.XS_SIZE
		)} * 20px - 1px)) {
		height: calc(100vh - ${parseFloat(UNITS.XS_SIZE)} * 20px);
		overflow: auto;
	}
`

export { Reset, Fonts, Icons, Wrapper, Content, Container, Body }
