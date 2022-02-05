import { createGlobalStyle } from 'styled-components'
import { PRIMARY_FONT, PRIMARY_COLOR, BREAKPOINT_SM_MIN, BREAKPOINT_XS_MAX } from './constants/styled'

export const Reset = createGlobalStyle`
  ${require('reset-css')};
  * {
    box-sizing: border-box;
    outline: none;
  }
  html,
  body,
  input,
  button {
    font-family: ${PRIMARY_FONT};
    color: ${PRIMARY_COLOR};
  }
  @media screen and (min-width: ${BREAKPOINT_SM_MIN}) {
    html
    body,
    input,
    button {
      font-size: 10px;
    }
  }
  @media screen and (max-width: ${BREAKPOINT_XS_MAX}) {
    html,
    body,
    input,
    button {
      font-size: calc(0px + 10 * (100vw / ${parseInt(BREAKPOINT_XS_MAX)}));
    }
  }
`

export const Fonts = createGlobalStyle`
  @font-face {
    font-family: 'interRegular';
    src: url('/assets/fonts/Inter-Regular.ttf');
  }
  @font-face {
    font-family: 'interSemiBold';
    src: url('./assets/fonts/Inter-SemiBold.ttf');
  }
  @font-face {
    font-family: 'interBold';
    src: url('./assets/fonts/Inter-Bold.ttf') ;
  }
`

export const Icons = createGlobalStyle`
  @font-face {
    font-family: 'icons';
    src:  url('/assets/icons/icons.eot?mbjhc7');
    src:  url('/assets/icons/icons.eot?mbjhc7#iefix') format('embedded-opentype'),
      url('/assets/icons/icons.ttf?mbjhc7') format('truetype'),
      url('/assets/icons/icons.woff?mbjhc7') format('woff'),
      url('/assets/icons/icons.svg?mbjhc7#icons') format('svg');
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
