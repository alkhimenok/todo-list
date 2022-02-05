import styled from 'styled-components'
import { LG_SIZE, XXL_SIZE, THIRD_FONT } from '../../constants/styled'

export const HeaderSection = styled.section`
	text-align: center;
`
export const HeaderLogo = styled.img`
	margin: 0 0 ${XXL_SIZE} 0;
	user-select: none;
`
export const HeaderTitle = styled.h1`
	font-family: ${THIRD_FONT};
	font-size: ${LG_SIZE};
`
