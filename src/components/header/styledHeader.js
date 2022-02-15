import styled from 'styled-components'
import * as UNITS from '@constants/units'
import * as FONTS from '@constants/fonts'
import * as BREAKPOINTS from '@constants/breakpoints'

const HeaderSection = styled.header`
	text-align: center;
`
const HeaderLogo = styled.img`
	user-select: none;
	@media screen and (min-width: ${BREAKPOINTS.SM_MIN}) {
		margin: 0 0 ${UNITS.XXL_SIZE} 0;
	}
	@media screen and (max-width: ${BREAKPOINTS.XS_MAX}) {
		width: 50%;
		height: 50%;
		margin: auto auto ${UNITS.XXL_SIZE} auto;
	}
`
const HeaderTitle = styled.h1`
	font-family: ${FONTS.TERTIARY};
	font-size: ${UNITS.LG_SIZE};
`

export { HeaderSection, HeaderLogo, HeaderTitle }
