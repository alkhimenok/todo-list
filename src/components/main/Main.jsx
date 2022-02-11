import React, { useState } from 'react'
import Container from '../common/Container'
import Form from '../form/Form'
import List from '../list/List'
import * as Styled from './styledMain'
import * as UNITS from '../../constants/units'
import { uid } from 'uid'

const Main = () => {
	const [todoList, setTodoList] = useState([])

	const addTodo = (content) => {
		setTodoList((prev) => {
			const newTodo = { id: uid(), content, isCompleted: false }

			return [newTodo, ...prev]
		})
	}

	return (
		<Styled.MainSection>
			<Container>
				<Form handleSubmit={addTodo} />
			</Container>
			<Container
				width={`calc(${UNITS.CONTAINER_WIDTH} + ${UNITS.XL_SIZE} * 2 + ${UNITS.LG_SIZE} * 2)`}
			>
				<List todoList={todoList} />
			</Container>
		</Styled.MainSection>
	)
}

export default Main
