import React from 'react'
import * as Styled from './styledHeader'
import logo from '../../assets/images/logo.svg'
import Container from '../common/Container'

const Header = () => {
	return (
		<Styled.HeaderSection>
			<Container>
				<Styled.HeaderLogo src={logo} alt='logo' />
				<Styled.HeaderTitle>Today I need to</Styled.HeaderTitle>
			</Container>
		</Styled.HeaderSection>
	)
}

export default Header
