import styled from 'styled-components'
import * as UNITS from '../../../constants/units'
import * as COLORS from '../../../constants/colors'
import * as TRANSPARENCY from '../../../constants/transparency'
import * as TRANSITIONS from '../../../constants/transitions'

const onHover = {
	drag: `color: ${COLORS.WARNING}; cursor: ns-resize;`,
	pencil: `color: ${COLORS.WARNING};`,
	bin: `color: ${COLORS.DANGER};`
}

const IconButtonWrapper = styled.button`
	padding: ${UNITS.XS_SIZE};
	font-size: ${({ size }) => size || UNITS.MD_SIZE};
	color: ${COLORS.PRIMARY_DARK};
	background-color: transparent;
	border: none;
	transition: all ${TRANSITIONS.SHORT};
	cursor: pointer;
	@media screen and (hover: hover) {
		&:hover {
			${({ icon }) => onHover[icon]}
		}
	}
	&:active {
		opacity: ${TRANSPARENCY.WEAK};
	}
	${({ isDisable }) =>
		isDisable && `opacity: ${TRANSPARENCY.HALF}; pointer-events: none`}
`
const IconButtonPicture = styled.i`
	pointer-events: none;
`

export { IconButtonWrapper, IconButtonPicture }
