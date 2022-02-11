import styled from 'styled-components'
import * as UNITS from '../../constants/units'
import * as COLORS from '../../constants/colors'
import { getScroll } from '../../utils/styled'

const ListWrapper = styled.ul`
	max-height: 100px;
	overflow: auto;
	${getScroll(
		`calc(${UNITS.BASE_SIZE} * 0.4)`,
		COLORS.SECONDARY,
		COLORS.PRIMARY_DARK,
		`calc(${UNITS.BASE_SIZE} * 0.4)`
	)}
`

export { ListWrapper }
