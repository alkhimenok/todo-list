import React from 'react'
import * as Styled from './styledApp'

const App = () => {
	return (
		<>
			<Styled.Fonts />
			<Styled.Icons />
			<Styled.Reset />

			<Styled.Wrapper>
				<Styled.Content>
					<Styled.Container>
						<Styled.Body>
							<h1 className='icon-bin' style={{ fontSize: '4rem' }}>
								hello
							</h1>
							{/* <Header />
							<Main /> */}
						</Styled.Body>
					</Styled.Container>
				</Styled.Content>
			</Styled.Wrapper>
		</>
	)
}

export default App
