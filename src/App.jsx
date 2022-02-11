import React from 'react'
import Header from './components/header/Header'
import Main from './components/main/Main'
import * as Styled from './styledApp'

const App = () => {
	return (
		<>
			<Styled.Fonts />
			<Styled.Icons />
			<Styled.Reset />

			<Styled.Wrapper>
				<Styled.Content>
					<Styled.Body>
						<Header />
						<Main />
					</Styled.Body>
				</Styled.Content>
			</Styled.Wrapper>
		</>
	)
}

export default App
