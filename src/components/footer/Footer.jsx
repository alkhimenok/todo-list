import React from 'react'
import Container from '../common/Container'
import Card from './card/Card'
import Button from '../UI/button/Button'
import * as Styled from './styledFooter'
import * as COLORS from '../../constants/colors'
import { uid } from 'uid'

const Footer = () => {
	const buttons = ['Check all', 'All', 'Active', 'Completed', 'Clear completed']

	return (
		<Styled.FooterSection>
			<Container>
				<Styled.FooterProgress>
					<Styled.FooterCardWrapper>
						<Card
							title={'Completed'}
							numberOfTask={1}
							totalTasks={10}
							color={COLORS.SECONDARY_DARK}
						/>
					</Styled.FooterCardWrapper>
					<Styled.FooterCardWrapper>
						<Card
							title={'To be finished'}
							numberOfTask={1}
							totalTasks={10}
							color={COLORS.TERTIARY_DARK}
						/>
					</Styled.FooterCardWrapper>
				</Styled.FooterProgress>
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
