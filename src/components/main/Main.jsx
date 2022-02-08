import React from 'react'
import Form from '../form/Form'
import * as Styled from './styledMain'

const Main = () => {
	const addTodo = () => console.log('heelo')

	return (
		<Styled.MainSection>
			<Form handleSubmit={addTodo} />
			{/* <List todoList={todoList} /> */}
		</Styled.MainSection>
	)
}

export default Main
