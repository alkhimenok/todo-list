import styled from 'styled-components'
import * as UNITS from '../../constants/units'
import * as BORDERS from '../../constants/borders'
import * as TRANSITIONS from '../../constants/transitions'
import { getDisplayFlex } from '../../utils/styled'

const FormWrapper = styled.form`
	${getDisplayFlex()}
`
const FormInputWrapper = styled.div`
	flex: 0 1 320px;
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
	${({ isHide }) =>
		isHide &&
		`
			width: 0%;
			margin: 0%;
			transition: all ${TRANSITIONS.LONG} ${TRANSITIONS.SHORT};
    `}
`

export { FormWrapper, FormInputWrapper, FormButtonWrapper }
