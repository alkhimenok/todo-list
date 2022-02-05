import React from 'react'
import { HeaderSection, HeaderLogo, HeaderTitle } from './styledHeader'

const Header = () => {
	return (
		<HeaderSection>
			<HeaderLogo src='/assets/images/logo.svg' alt='logo' />
			<HeaderTitle>Today I need to</HeaderTitle>
		</HeaderSection>
	)
}

export default Header
