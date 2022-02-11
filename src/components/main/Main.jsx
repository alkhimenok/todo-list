import React, { useState } from 'react'
import Form from '../form/Form'
import List from '../list/List'
import Todo from '../todo/Todo'
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
		<Styled.MainSection>
			<Form handleSubmit={addTodo} />
			<List todoList={todoList} />
		</Styled.MainSection>
	)
}

export default Main
