import React, { useState } from 'react'
import Form from '../form/Form'
import List from '../list/List'
import Button from '../UI/button/Button'
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
		<Button content={'hello'} isFocused={false} />
		// <Styled.MainSection>
		// 	<Form handleSubmit={addTodo} />
		// 	<List todoList={todoList} />
		// </Styled.MainSection>
	)
}

export default Main
