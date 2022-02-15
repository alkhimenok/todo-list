import styled from 'styled-components'
import * as UNITS from '@constants/units'
import * as FONTS from '@constants/fonts'
import * as COLORS from '@constants/colors'
import * as BORDERS from '@constants/borders'
import * as TRANSITIONS from '@constants/transitions'

const CardWrapper = styled.div`
	padding: ${UNITS.SM_SIZE};
	background-color: ${COLORS.TRANSPARENCY_SECONDARY};
	border-radius: ${BORDERS.RADIUS_SUPERELLIPSE};
`
const CartNumberOfTask = styled.h5`
	margin: 0 0 ${UNITS.XS_SIZE} 0;
	font-family: ${FONTS.SECONDARY};
	font-size: ${UNITS.XS_SIZE};
	color: ${COLORS.TRANSPARENCY_PRIMARY};
`
const CardTitle = styled.h4`
	margin: 0 0 ${UNITS.SM_SIZE} 0;
	font-family: ${FONTS.TERTIARY};
	font-size: ${UNITS.SM_SIZE};
`
const CardProgress = styled.div`
	width: 100%;
	height: calc(${UNITS.BASE_SIZE} * 0.5); ///
	background-color: ${COLORS.TRANSPARENCY_SECONDARY};
	border-radius: ${BORDERS.RADIUS_SUPERELLIPSE};
	overflow: hidden;
`
const CardThumb = styled.div`
	height: 100%;
	width: ${({ thumbWidth }) => `${thumbWidth}%`};
	background-color: ${({ thumbColor }) => thumbColor};
	border-radius: ${BORDERS.RADIUS_SUPERELLIPSE};
	transition: ${TRANSITIONS.LONG};
`

export { CardWrapper, CartNumberOfTask, CardTitle, CardProgress, CardThumb }
