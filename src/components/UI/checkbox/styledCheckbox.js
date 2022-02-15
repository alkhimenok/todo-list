import styled from 'styled-components'
import * as UNITS from '@constants/units'
import * as COLORS from '@constants/colors'
import * as BORDERS from '@constants/borders'
import * as TRANSITIONS from '@constants/transitions'

const CheckboxWrapper = styled.div`
	display: inline-block;
	${({ size }) =>
		size
			? `
      width: ${size};
      height: ${size};
    `
			: ` 
      width: ${UNITS.LG_SIZE};
      height: ${UNITS.LG_SIZE};
    `}
`
const CheckboxLabel = styled.label`
	position: relative;
	display: block;
	width: 100%;
	height: 100%;
	border: ${BORDERS.THIN} ${COLORS.SECONDARY};
	border-radius: 10%;
	transition: all ${TRANSITIONS.SHORT} ${TRANSITIONS.SHORT};
	&:before {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -65%) rotate(-135deg) scale(0);
		width: 30%;
		height: 50%;
		border-top: ${BORDERS.THIN} ${COLORS.TERTIARY};
		border-left: ${BORDERS.THIN} ${COLORS.TERTIARY};
		transition: all ${TRANSITIONS.SHORT};
	}
	${({ isChecked }) =>
		isChecked &&
		`
			background-color: ${COLORS.SUCCESS};
			border-color: ${COLORS.SUCCESS};
			transition: all ${TRANSITIONS.SHORT};
			&:before {
				transform: translate(-50%, -65%) rotate(-135deg) scale(1);
				transition: all ${TRANSITIONS.SHORT} ${TRANSITIONS.SHORT};
			}
  	`}
`
const CheckboxInput = styled.input`
	display: none;
`

export { CheckboxWrapper, CheckboxLabel, CheckboxInput }
