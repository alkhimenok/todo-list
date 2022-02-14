import React from 'react'
import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'
import * as Styled from './styledApp'
import Card from './components/footer/card/Card'

const App = () => {
	return (
		<>
			<Styled.Fonts />
			<Styled.Icons />
			<Styled.Reset />

			<Styled.Wrapper>
				<Styled.Content>
					<Styled.Body>
						<Card
							title={'Completed'}
							numberOfTask={1}
							totalTasks={10}
							color={'#5D5FEF'}
						/>
						{/* <Header />
						<Main />
						<Footer /> */}
					</Styled.Body>
				</Styled.Content>
			</Styled.Wrapper>
		</>
	)
}

export default App
