import React from 'react'
import * as Styled from './styledHeader'
import logo from '../../assets/images/logo.svg'

const Header = () => {
	return (
		<Styled.HeaderSection>
			<Styled.HeaderLogo src={logo} alt='logo' />
			<Styled.HeaderTitle>Today I need to</Styled.HeaderTitle>
		</Styled.HeaderSection>
	)
}

export default Header
