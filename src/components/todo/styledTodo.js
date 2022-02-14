import styled from 'styled-components'
import * as UNITS from '../../constants/units'
import * as TRANSPARENCY from '../../constants/transparency'
import * as TRANSITIONS from '../../constants/transitions'
import { getDisplayFlex } from '../../utils/styled'

const TodoWrapper = styled.li`
	position: relative;
	${getDisplayFlex('center', 'space-between')};
	cursor: pointer;
	padding: 0 ${UNITS.LG_SIZE} 0 0;
	transition: ${TRANSITIONS.SHORT};
`
const TodoDrag = styled.div`
	transition: ${TRANSITIONS.SHORT};
	@media screen and (hover: hover) {
		${({ isHovered }) =>
			isHovered || `opacity: ${TRANSPARENCY.INVISIBLE}; pointer-events: none;`};
	}
`
const TodoContent = styled.h3`
	flex: 1;
	padding: 0 ${UNITS.XS_SIZE};
	font-size: ${UNITS.MD_SIZE};
	word-break: break-all;
	${({ isDisable }) => isDisable && `opacity: ${TRANSPARENCY.HALF};`}
	transition: ${TRANSITIONS.SHORT};
`
const TodoForm = styled.form``

export { TodoWrapper, TodoDrag, TodoContent, TodoForm }
