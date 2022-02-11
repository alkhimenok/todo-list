import styled from 'styled-components'
import { getDisplayFlex } from '../../utils/styled'
import * as UNITS from '../../constants/units'
import * as COLORS from '../../constants/colors'
import * as BORDERS from '../../constants/borders'
import * as TRANSITIONS from '../../constants/transitions'

const FormWrapper = styled.form`
	${getDisplayFlex()}
	padding: ${UNITS.XXL_SIZE} 0;
`
const FormFieldset = styled.fieldset`
	flex: 0 1 320px;
	position: relative;
`
const FormInput = styled.input`
	width: 100%;
	font-size: ${UNITS.MD_SIZE};
	padding: ${UNITS.XS_SIZE};
	border: ${BORDERS.THIN} ${COLORS.SECONDARY};
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
const FormLabel = styled.label`
	position: absolute;
	top: 50%;
	left: ${UNITS.XS_SIZE};
	transform: translate(0, -50%);
	font-size: ${UNITS.MD_SIZE};
	color: ${COLORS.SECONDARY};
	user-select: none;
	pointer-events: none;
	transition: all ${TRANSITIONS.SHORT};
`
const FormButtonWrapper = styled.div`
	width: 80px;
	margin: 0 0 0 ${UNITS.MD_SIZE};
	border-radius: ${BORDERS.RADIUS_SUPERELLIPSE};
	overflow: hidden;
	transition: all ${TRANSITIONS.LONG};
	button {
		width: 100%;
	}
	${({ hide }) =>
		hide &&
		`
			width: 0%;
			margin: 0%;
			transition: all ${TRANSITIONS.LONG} ${TRANSITIONS.SHORT};
    `}
`

export { FormWrapper, FormFieldset, FormInput, FormLabel, FormButtonWrapper }
