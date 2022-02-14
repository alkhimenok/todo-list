import React from 'react'
import Container from '../common/Container'
import Button from '../UI/button/Button'
import * as Styled from './styledFooter'
import { uid } from 'uid'

const Footer = () => {
	const buttons = ['Check all', 'All', 'Active', 'Completed', 'Clear completed']

	return (
		<Styled.FooterSection>
			<Container>
				<Styled.FooterProgress></Styled.FooterProgress>
				<Styled.FooterNav>
					<Styled.FooterList>
						{buttons.map((btn) => (
							<Styled.FooterItem key={uid()}>
								<Button
									id={uid()}
									content={btn}
									type={'button'}
									isFocused={false}
									isHide={false}
									isDisable={false}
								/>
							</Styled.FooterItem>
						))}
					</Styled.FooterList>
				</Styled.FooterNav>
			</Container>
		</Styled.FooterSection>
	)
}

export default Footer
