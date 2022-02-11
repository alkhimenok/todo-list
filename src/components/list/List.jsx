import React from 'react'
import PropTypes from 'prop-types'
import Todo from '../todo/Todo'
import * as Styled from './styledList'

const List = ({ todoList }) => {
	return (
		<Styled.ListWrapper>
			{todoList.map(({ id, content, isCompleted }) => (
				<Todo id={id} key={id} content={content} isCompleted={isCompleted} />
			))}
		</Styled.ListWrapper>
	)
}

List.propTypes = {
	todoList: PropTypes.array
}

export default List
