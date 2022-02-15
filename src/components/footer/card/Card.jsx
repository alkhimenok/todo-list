import React from 'react'
import PropTypes from 'prop-types'
import * as Styled from './styledCard'

const Card = ({ title, numberOfTask, totalTasks, color }) => {
	const width = (100 / totalTasks) * numberOfTask
	const subtitle =
		numberOfTask === 1 ? `${numberOfTask} task` : `${numberOfTask} tasks`

	return (
		<Styled.CardWrapper>
			<Styled.CartNumberOfTask>{subtitle}</Styled.CartNumberOfTask>
			<Styled.CardTitle>{title}</Styled.CardTitle>
			<Styled.CardProgress>
				<Styled.CardThumb thumbColor={color} thumbWidth={width} />
			</Styled.CardProgress>
		</Styled.CardWrapper>
	)
}

Card.propTypes = {
	title: PropTypes.string,
	numberOfTask: PropTypes.number,
	totalTasks: PropTypes.number,
	color: PropTypes.string
}

export default Card
