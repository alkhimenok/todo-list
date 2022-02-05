import styled from 'styled-components'
import { getDisplayFlex } from '../../utils/styled'
import {
	XS_SIZE,
	MD_SIZE,
	XL_SIZE,
	PRIMARY_DARK_COLOR,
	THIRD_COLOR,
	DANGER_COLOR,
	WARNING_COLOR,
	BORDER_RADIUS_CIRCLE,
	DELAY
} from '../../constants/styled'

const ButtonIcon = styled.button`
	width: ${XL_SIZE};
	height: ${XL_SIZE};
	${getDisplayFlex()}
	padding: ${XS_SIZE};
	font-size: ${MD_SIZE};
	background-color: transparent;
	border: none;
	border-radius: ${BORDER_RADIUS_CIRCLE};
	transition: ${DELAY};
	cursor: pointer;
`

export const TodoWrapper = styled.li`
	position: relative;
	padding: ${XS_SIZE} 0;
	@media screen and (hover: hover) {
		&:hover {
			& > button {
				opacity: 1;
			}
		}
	}
	@media screen and (hover: none) {
		& > button {
			opacity: 1;
		}
	}
`
export const TodoButtonDrag = styled(ButtonIcon)`
	position: absolute;
	top: 50%;
	transform: translate(-100%, -50%);
	color: ${PRIMARY_DARK_COLOR};
	opacity: 0;
	@media screen and (hover: hover) {
		&:hover {
			color: ${WARNING_COLOR};
		}
	}
`
export const TodoLabel = styled.label`
	${getDisplayFlex('center', 'flex-start')}
`
export const TodoCheckbox = styled.input`
	width: ${MD_SIZE};
	height: ${MD_SIZE};
	margin: 0 ${XS_SIZE} 0 0;
`
export const TodoContent = styled.h2`
	flex: auto;
	font-size: ${MD_SIZE};
`
export const TodoForm = styled.form`
	${getDisplayFlex('center', 'space-between')}
`
export const TodoButtonChange = styled(ButtonIcon)`
	color: ${WARNING_COLOR};
	@media screen and (hover: hover) {
		&:hover {
			color: ${THIRD_COLOR};
			background-color: ${WARNING_COLOR};
		}
	}
`
export const TodoButtonDelete = styled(ButtonIcon)`
	color: ${DANGER_COLOR};
	@media screen and (hover: hover) {
		&:hover {
			color: ${THIRD_COLOR};
			background-color: ${DANGER_COLOR};
		}
	}
`
