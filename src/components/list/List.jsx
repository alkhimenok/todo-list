import React from 'react'
import Todo from '../todo/Todo'
import { ListWrapper } from './styledList'
import { uid } from 'uid'

const List = ({ todoList }) => {
	return (
		<ListWrapper>
			{todoList
				.sort((a, b) => a.index - b.index)
				.map((todo) => (
					<Todo key={uid()} todo={todo} />
				))}
		</ListWrapper>
	)
}

export default List
