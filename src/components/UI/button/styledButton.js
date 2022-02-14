import styled from 'styled-components'
import * as UNITS from '../../../constants/units'
import * as FONTS from '../../../constants/fonts'
import * as COLORS from '../../../constants/colors'
import * as BORDERS from '../../../constants/borders'
import * as TRANSITIONS from '../../../constants/transitions'
import * as TRANSPARENCY from '../../../constants/transparency'

const ButtonWrapper = styled.button`
	padding: ${UNITS.SM_SIZE};
	font-family: ${FONTS.SECONDARY};
	font-size: ${UNITS.SM_SIZE};
	border: ${BORDERS.THIN} transparent;
	border-radius: ${BORDERS.RADIUS_SUPERELLIPSE};
	transition: all ${TRANSITIONS.SHORT};
	cursor: pointer;
	@media screen and (hover: hover) {
		&:not(:active) {
			&:hover {
				color: ${COLORS.SUCCESS};
				background-color: ${COLORS.TERTIARY};
				border-color: ${COLORS.SUCCESS};
			}
		}
	}
	&:active {
		color: ${COLORS.TERTIARY};
		background-color: ${COLORS.SECONDARY};
	}
	${({ isFocused }) =>
		isFocused
			? `
        color: ${COLORS.TERTIARY};
        background-color: ${COLORS.SUCCESS};
      `
			: `
        background-color: transparent;
      `}
	${({ isHide }) =>
		isHide && `opacity: ${TRANSPARENCY.INVISIBLE}; pointer-events: none;`}
	${({ isDisable }) =>
		isDisable &&
		`opacity: ${TRANSPARENCY.HALF}; user-select: none; pointer-events: none;`}
`

export { ButtonWrapper }
