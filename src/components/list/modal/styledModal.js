import styled from 'styled-components'
import * as UNITS from '../../../constants/units'
import * as COLORS from '../../../constants/colors'
import * as BORDERS from '../../../constants/borders'
import * as TRANSITIONS from '../../../constants/transitions'
import { getDisplayFlex } from '../../../utils/styled'

const ModalWrapper = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	${getDisplayFlex()}
	background-color: ${COLORS.PRIMARY_TRANSPARENT};
	${({ hide }) =>
		hide && 'opacity: 0; user-select: none; pointer-events: none;'}
	transition: ${TRANSITIONS.LONG};
`
const ModalContent = styled.div`
	position: relative;
	padding: ${UNITS.LG_SIZE};
	background-color: ${COLORS.TERTIARY};
	border-radius: ${BORDERS.RADIUS_SUPERELLIPSE};
`
const ModalButtonClose = styled.button`
	position: absolute;
	top: ${UNITS.LG_SIZE};
	right: ${UNITS.LG_SIZE};
	transform: rotate(45deg);
	width: ${UNITS.LG_SIZE};
	height: ${UNITS.LG_SIZE};
	background-color: transparent;
	border: none;
	border-radius: ${BORDERS.RADIUS_CIRCLE};
	transition: ${TRANSITIONS.SHORT};
	cursor: pointer;
	&::before,
	&::after {
		content: '';
		display: block;
		width: 80%;
		height: 10%;
		margin: auto;
		background-color: ${COLORS.DANGER};
		transition: ${TRANSITIONS.SHORT};
	}
	&::after {
		transform: rotate(90deg) translate(-5%, 0);
	}
	&::before {
		transform: translate(0, 75%);
	}
	@media screen and (hover: hover) {
		&:hover {
			transform: rotate(135deg);
		}
	}
	&:active {
		background-color: ${COLORS.DANGER};
		&::before,
		&::after {
			background-color: ${COLORS.TERTIARY};
		}
	}
`
const ModalTitle = styled.h2`
	font-size: ${UNITS.LG_SIZE};
	max-width: 90%;
	margin: 0 0 ${UNITS.XXL_SIZE} 0;
`
const ModalForm = styled.form`
	${getDisplayFlex('center', 'space-between')}
`
const ModalInputWrapper = styled.div`
	flex: 1;
	margin: 0 ${UNITS.XS_SIZE} 0 0;
`
const ModalButtonWrapper = styled.div``

export {
	ModalWrapper,
	ModalContent,
	ModalButtonClose,
	ModalTitle,
	ModalForm,
	ModalInputWrapper,
	ModalButtonWrapper
}
