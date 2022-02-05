import React from 'react'
import Header from './components/header/Header'
import Main from './components/main/Main'
import { Fonts, Icons, Reset, Wrapper, Container, Body } from './styledApp'

const App = () => {
	return (
		<>
			<Fonts />
			<Icons />
			<Reset />

			<Wrapper>
				<Container>
					<Body>
						<Header />
						<Main />
					</Body>
				</Container>
			</Wrapper>
		</>
	)
}

export default App
