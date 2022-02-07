import React, { useState } from 'react'
import Form from '../form/Form'
import List from '../list/List'
import { MainSection } from './styledMain'

const Main = () => {
	const [todoList, setTodoList] = useState([
		{ index: 3, isCompleted: true, content: 'content' },
		{ index: 2, isCompleted: false, content: 'hellocontent' },
		{ index: 1, isCompleted: false, contenInfinityt: 'hello' }
	])

	const addTodo = (content) =>
		setTodoList((prev) => [{ isCompleted: false, content }, ...prev])

	return (
		<MainSection>
			<Form handleSubmit={addTodo} />
			<List todoList={todoList} />
		</MainSection>
	)
}

export default Main
