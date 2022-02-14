import React from 'react'
import PropTypes from 'prop-types'
import Container from '../common/Container'
import Card from './card/Card'
import Button from '../UI/button/Button'
import * as Styled from './styledFooter'
import * as COLORS from '../../constants/colors'
import { uid } from 'uid'

const Footer = ({ progress, buttons, onClick }) => {
	const { thereTask, numberOfTask, totalTasks } = progress

	if (!thereTask) {
		return (
			<Styled.FooterTitle>
				Congrat, you have no more tasks to do
			</Styled.FooterTitle>
		)
	}

	return (
		<Styled.FooterSection>
			<Container>
				<Styled.FooterProgress>
					<Styled.FooterCardWrapper>
						<Card
							title={'Completed'}
							numberOfTask={numberOfTask}
							totalTasks={totalTasks}
							color={COLORS.SECONDARY_DARK}
						/>
					</Styled.FooterCardWrapper>
					<Styled.FooterCardWrapper>
						<Card
							title={'To be finished'}
							numberOfTask={totalTasks - numberOfTask}
							totalTasks={totalTasks}
							color={COLORS.TERTIARY_DARK}
						/>
					</Styled.FooterCardWrapper>
				</Styled.FooterProgress>
				<Styled.FooterNav>
					<Styled.FooterList onClick={onClick}>
						{buttons.map(({ id, content, isFocused, isHide, isDisable }) => (
							<Styled.FooterItem key={uid()}>
								<Button
									id={id}
									content={content}
									type={'button'}
									isFocused={isFocused}
									isHide={isHide}
									isDisable={isDisable}
								/>
							</Styled.FooterItem>
						))}
					</Styled.FooterList>
				</Styled.FooterNav>
			</Container>
		</Styled.FooterSection>
	)
}

Footer.propTypes = {
	progress: PropTypes.object,
	buttons: PropTypes.array,
	onClick: PropTypes.func
}

export default Footer
