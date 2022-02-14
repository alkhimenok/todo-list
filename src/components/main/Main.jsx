import React from 'react'
import Container from '@components/common/Container'
import Form from '@components/form/Form'
import List from '@components/list/List'
import * as Styled from './styledMain'

const Main = () => {
	return (
		<Styled.MainSection>
			<Styled.MainFormWrapper>
				<Container>
					<Form />
				</Container>
			</Styled.MainFormWrapper>
			<Styled.MainListWrapper>
				<Container isList={true}>
					<List />
				</Container>
			</Styled.MainListWrapper>
		</Styled.MainSection>
	)
}

export default Main
