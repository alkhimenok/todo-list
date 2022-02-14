import styled from 'styled-components'
import * as UNITS from '../../constants/units'
import { forLastChild } from '../../utils/styled'

const MainSection = styled.main`
	padding: ${UNITS.XL_SIZE} 0;
	${forLastChild('margin: 0;')}
`
const MainFormWrapper = styled.div``
const MainListWrapper = styled.div`
	margin: ${UNITS.LG_SIZE} 0 0 0;
`

export { MainSection, MainFormWrapper, MainListWrapper }
