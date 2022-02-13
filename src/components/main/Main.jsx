import React from 'react'
import Container from '../common/Container'
import Form from '../form/Form'
import List from '../list/List'
import * as Styled from './styledMain'
import { useList } from './useList'

const Main = () => {
	const { list, addToList, replaceList } = useList()

	return (
		<Styled.MainSection>
			<Container>
				<Form handleSubmit={addToList} />
			</Container>
			<Container isList={true}>
				<List todoList={list} handleChange={replaceList} />
			</Container>
		</Styled.MainSection>
	)
}

export default Main
