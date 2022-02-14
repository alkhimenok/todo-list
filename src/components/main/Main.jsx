import React from 'react'
import PropTypes from 'prop-types'
import Container from '../common/Container'
import Form from '../form/Form'
import List from '../list/List'
import * as Styled from './styledMain'
import { useList } from './useList'

const Main = ({ list, onAction }) => {
	const { addToList, replaceList } = useList(list, onAction)

	return (
		<Styled.MainSection>
			<Styled.MainFormWrapper>
				<Container>
					<Form onAddTodo={addToList} />
				</Container>
			</Styled.MainFormWrapper>
			<Styled.MainListWrapper>
				<Container isList={true}>
					<List list={list} onReplaceList={replaceList} />
				</Container>
			</Styled.MainListWrapper>
		</Styled.MainSection>
	)
}

Main.propTypes = {
	list: PropTypes.array,
	onAction: PropTypes.func
}

export default Main
