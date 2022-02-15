import React from 'react'
import Header from '@components/header/Header'
import Main from '@components/main/Main'
import Footer from '@components/footer/Footer'
import * as Styled from './styledApp'
import './index.css'

const App = () => {
	return (
		<>
			<Styled.Reset />

			<Styled.Wrapper>
				<Styled.Content>
					<Styled.Body id='body'>
						<Header />
						<Main />
						<Footer />
					</Styled.Body>
				</Styled.Content>
			</Styled.Wrapper>
		</>
	)
}

export default App
