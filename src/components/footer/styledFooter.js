import styled from 'styled-components'
import { getDisplayFlex } from '../../utils/styled'

const FooterSection = styled.footer``
const FooterProgress = styled.div``
const FooterNav = styled.nav``
const FooterList = styled.ul`
	${getDisplayFlex('center', 'space-between')}
`
const FooterItem = styled.li``

export { FooterSection, FooterProgress, FooterNav, FooterList, FooterItem }
