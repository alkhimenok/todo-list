import styled from 'styled-components'
import { getDisplayFlex } from '../../utils/styled'
import {
	XS_SIZE,
	MD_SIZE,
	XXL_SIZE,
	SECONDARY_COLOR,
	THIRD_COLOR,
	SUCCESS_COLOR,
	SECONDARY_FONT,
	THIN_BORDER,
	BORDER_RADIUS_SUPERELLIPSE,
	DELAY
} from '../../constants/styled'

export const FormWrapper = styled.form`
	${getDisplayFlex()}
	padding: ${XXL_SIZE};
`
export const FormFieldset = styled.fieldset`
	flex: 0 1 320px;
	position: relative;
`
export const FormInput = styled.input`
	width: 100%;
	font-size: ${MD_SIZE};
	padding: ${XS_SIZE};
	border: ${THIN_BORDER} ${SECONDARY_COLOR};
	border-radius: ${BORDER_RADIUS_SUPERELLIPSE};
	transition: ${DELAY};
	&:focus {
		border-color: ${SUCCESS_COLOR};
	}
	&:focus + label,
	&:not(:placeholder-shown) + label {
		top: -${XS_SIZE};
		left: 0;
		font-size: ${XS_SIZE};
		color: ${SUCCESS_COLOR};
	}
`
export const FormLabel = styled.label`
	position: absolute;
	top: 50%;
	left: ${XS_SIZE};
	transform: translate(0, -50%);
	font-size: ${MD_SIZE};
	color: ${SECONDARY_COLOR};
	user-select: none;
	pointer-events: none;
	transition: ${DELAY};
`
export const FormButton = styled.button`
	width: 80px;
	margin: 0 0 0 ${MD_SIZE};
	padding: ${XS_SIZE} ${MD_SIZE};
	font-family: ${SECONDARY_FONT};
	font-size: ${MD_SIZE};
	color: ${THIRD_COLOR};
	background-color: ${SUCCESS_COLOR};
	border: ${THIN_BORDER} transparent;
	border-radius: ${BORDER_RADIUS_SUPERELLIPSE};
	overflow: hidden;
	transition: ${DELAY};
	cursor: pointer;
	@media screen and (hover: hover) {
		&:not(:active) {
			&:hover {
				color: ${SUCCESS_COLOR};
				background-color: ${THIRD_COLOR};
				border: ${THIN_BORDER} ${SUCCESS_COLOR};
			}
		}
	}
	&:active {
		background-color: ${SECONDARY_COLOR};
	}
	${props =>
		props.hide
			? `
          width: 0px;
          margin: 0%;
          padding: ${XS_SIZE} 0;
          opacity: 0;
          transition: ${DELAY} 0.2s;
        `
			: ''}
`
