import styled from 'styled-components'
import * as UNITS from '../../constants/units'
import * as COLORS from '../../constants/colors'
import { getDisplayFlex } from '../../utils/styled'

const FooterSection = styled.footer``
const FooterTitle = styled.h3`
	${getDisplayFlex()}
	font-size: ${UNITS.MD_SIZE};
	color: ${COLORS.SECONDARY};
	text-align: center;
`
const FooterIcon = styled.i`
	font-size: ${UNITS.LG_SIZE};
	margin: 0 ${UNITS.XS_SIZE} 0 0;
`
const FooterBody = styled.div``
const FooterProgress = styled.div`
	${getDisplayFlex('center', 'space-between')}
	margin: 0 0 ${UNITS.XL_SIZE} 0;
`
const FooterCardWrapper = styled.div`
	flex: 0 0 45%;
`
const FooterNav = styled.nav``
const FooterList = styled.ul`
	${getDisplayFlex('center', 'space-between')}
`
const FooterItem = styled.li``

export {
	FooterSection,
	FooterBody,
	FooterTitle,
	FooterIcon,
	FooterProgress,
	FooterCardWrapper,
	FooterNav,
	FooterList,
	FooterItem
}
