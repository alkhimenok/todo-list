import styled from 'styled-components'
import * as UNITS from '../../../constants/units'
import * as COLORS from '../../../constants/colors'
import * as BORDERS from '../../../constants/borders'
import * as TRANSITIONS from '../../../constants/transitions'

const InputFieldset = styled.fieldset`
	width: 100%;
	position: relative;
`
const InputWrapper = styled.input`
	width: 100%;
	font-size: ${UNITS.MD_SIZE};
	padding: ${UNITS.XS_SIZE};
	border: ${BORDERS.THIN} ${COLORS.TRANSPARENCY_SECONDARY};
	border-radius: ${BORDERS.RADIUS_SUPERELLIPSE};
	transition: all ${TRANSITIONS.SHORT};
	&:focus {
		border-color: ${COLORS.SUCCESS};
	}
	&:focus + label,
	&:not(:placeholder-shown) + label {
		top: -${UNITS.XS_SIZE};
		left: 0;
		font-size: ${UNITS.XS_SIZE};
		color: ${COLORS.SUCCESS};
	}
`
const InputLabel = styled.label`
	position: absolute;
	top: 50%;
	left: ${UNITS.XS_SIZE};
	transform: translate(0, -50%);
	font-size: ${UNITS.MD_SIZE};
	color: ${COLORS.TRANSPARENCY_SECONDARY};
	user-select: none;
	pointer-events: none;
	transition: all ${TRANSITIONS.SHORT};
`

export { InputFieldset, InputWrapper, InputLabel }
