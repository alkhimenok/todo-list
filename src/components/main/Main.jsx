import React, { useState } from 'react'
import Form from '../form/Form'
import List from '../list/List'
import IconButton from '../UI/IconButton/IconButton'
import * as Styled from './styledMain'

const Main = () => {
	const [todoList, setTodoList] = useState([])

	const addTodo = (content) => {
		setTodoList((prev) => {
			const newTodo = { isCompleted: false, content }

			return [newTodo, ...prev]
		})
	}

	return (
		<>
			<IconButton icon='drag' size='50px' />
			<IconButton icon='bin' size='50px' />
			<IconButton icon='pencil' size='50px' />
		</>
		// <Styled.MainSection>
		// 	<Form handleSubmit={addTodo} />
		// 	<List todoList={todoList} />
		// </Styled.MainSection>
	)
}

export default Main
