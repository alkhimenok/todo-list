import styled from 'styled-components'
import * as UNITS from '../../../constants/units'
import * as FONTS from '../../../constants/fonts'
import * as COLORS from '../../../constants/colors'
import * as BORDERS from '../../../constants/borders'
import * as TRANSITIONS from '../../../constants/transitions'

const CardWrapper = styled.div`
	padding: ${UNITS.MD_SIZE};
	background-color: ${COLORS.SECONDARY};
	border-radius: ${BORDERS.RADIUS_SUPERELLIPSE};
`
const CartNumberOfTask = styled.h5`
	margin: 0 0 ${UNITS.XS_SIZE} 0;
	font-family: ${FONTS.SECONDARY};
	font-size: ${UNITS.XS_SIZE};
	color: ${COLORS.WARNING};
`
const CardTitle = styled.h4`
	margin: 0 0 ${UNITS.MD_SIZE} 0;
	font-family: ${FONTS.TERTIARY};
	font-size: ${UNITS.MD_SIZE};
`
const CardProgress = styled.div`
	width: 100%;
	height: calc(${UNITS.BASE_SIZE} * 0.5); ///
	background-color: ${COLORS.PRIMARY_DARK};
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
