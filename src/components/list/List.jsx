import React from 'react'
import * as Styled from './styledList'

const List = ({ todoList }) => {
	// const list = useList()
	return (
		<Styled.ListWrapper>
			{todoList.map((todo) => (
				<li>{todo.content}</li>
			))}
		</Styled.ListWrapper>
	)
}

export default List
