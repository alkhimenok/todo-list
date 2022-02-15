import React from 'react'
import Container from '@components/common/Container'
import Button from '@components/UI/button/Button'
import Card from './card/Card'
import * as COLORS from '@constants/colors'
import * as Styled from './styledFooter'
import { useFooter } from './useFooter'

const Footer = () => {
	const { totalTasks, numberOfTask, buttons, handleClick } = useFooter()

	return (
		<Styled.FooterSection id='footer'>
			<Container>
				{!totalTasks ? (
					<Styled.FooterTitle>
						<Styled.FooterIcon className={'icon-mark'} />
						Congrat, you have no more tasks to do
					</Styled.FooterTitle>
				) : (
					<Styled.FooterBody>
						<Styled.FooterProgress>
							<Styled.FooterCardWrapper>
								<Card
									title={'Completed'}
									numberOfTask={numberOfTask}
									totalTasks={totalTasks}
									color={COLORS.INFO}
								/>
							</Styled.FooterCardWrapper>
							<Styled.FooterCardWrapper>
								<Card
									title={'To be finished'}
									numberOfTask={totalTasks - numberOfTask}
									totalTasks={totalTasks}
									color={COLORS.WARNING}
								/>
							</Styled.FooterCardWrapper>
						</Styled.FooterProgress>
						<Styled.FooterNav>
							<Styled.FooterList onClick={handleClick}>
								{buttons.map(
									({ id, content, isFocused, isHide, isDisable }) => (
										<Styled.FooterItem key={id}>
											<Button
												id={id}
												content={content}
												type={'button'}
												isFocused={isFocused}
												isHide={isHide}
												isDisable={isDisable}
											/>
										</Styled.FooterItem>
									)
								)}
							</Styled.FooterList>
						</Styled.FooterNav>
					</Styled.FooterBody>
				)}
			</Container>
		</Styled.FooterSection>
	)
}

export default Footer
