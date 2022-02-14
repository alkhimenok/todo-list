import React, { useState } from 'react'
import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'
import * as Styled from './styledApp'

const App = () => {
	const [list, setList] = useState([])
	const [buttons, setButtons] = useState([
		{
			id: 'checkAll',
			content: 'Check all',
			isFocused: false,
			isHide: true,
			isDisable: false
		},
		{
			id: 'all',
			content: 'All',
			isFocused: false,
			isHide: true,
			isDisable: false
		},
		{
			id: 'active',
			content: 'Active',
			isFocused: false,
			isHide: true,
			isDisable: false
		},
		{
			id: 'completed',
			content: 'Completed',
			isFocused: false,
			isHide: true,
			isDisable: false
		},
		{
			id: 'clearCompleted',
			content: 'Clear completed',
			isFocused: false,
			isHide: true,
			isDisable: false
		}
	])
	const [progress, setProgress] = useState({
		thereTask: false,
		numberOfTask: 0,
		totalTasks: 0
	})

	const handleAction = (newList) => {
		setList(newList)

		setProgress({
			thereTask: !!newList.length,
			numberOfTask: newList.filter((todo) => todo.isCompleted).length,
			totalTasks: newList.length
		})
		setButtons((prev) => {
			if (!newList.length) {
				return prev
			}

			return prev.map((btn) => {
				if (newList.every((todo) => todo.isCompleted)) {
					if (btn.id === 'clearCompleted') {
						btn.isHide = false
					} else {
						btn.isHide = true
					}
				} else if (newList.every((todo) => !todo.isCompleted)) {
					if (btn.id === 'checkAll') {
						btn.isHide = false
					} else {
						btn.isHide = true
					}
				} else {
					btn.isHide = false
				}

				if (btn.id === 'all') {
					btn.isHide = false
					if (!buttons.some(({ isFocused }) => isFocused)) {
						btn.isFocused = true
					}
				}

				return btn
			})
		})
	}

	const handleClickButton = (e) => {
		const { id } = e.target

		if (id === 'checkAll') {
			setList((prev) => {
				return prev.map((todo) => {
					todo.isCompleted = true
					todo.isHide = false

					return todo
				})
			})
			setButtons((prev) => {
				return prev.map((btn) => {
					btn.id === 'all' ? (btn.isFocused = true) : (btn.isFocused = false)

					return btn
				})
			})
		} else if (id === 'clearCompleted') {
			setList((prev) => {
				console.log(prev)

				return prev.map((todo) => {
					todo.isCompleted = false
					todo.isHide = false

					return todo
				})
			})
			setButtons((prev) => {
				return prev.map((btn) => {
					btn.id === 'all' ? (btn.isFocused = true) : (btn.isFocused = false)

					return btn
				})
			})
		} else if (id === 'all') {
			setList((prev) => {
				return prev.map((todo) => {
					todo.isHide = false

					return todo
				})
			})
			setButtons((prev) => {
				return prev.map((btn) => {
					if (btn.id === id) {
						btn.isFocused = true
					} else {
						btn.isFocused = false
					}

					return btn
				})
			})
		} else if (id === 'active') {
			setList((prev) => {
				return prev.map((todo) => {
					if (todo.isCompleted) {
						todo.isHide = true
					} else {
						todo.isHide = false
					}

					return todo
				})
			})
			setButtons((prev) => {
				return prev.map((btn) => {
					if (btn.id === id) {
						btn.isFocused = true
					} else {
						btn.isFocused = false
					}

					return btn
				})
			})
		} else if (id === 'completed') {
			setList((prev) => {
				return prev.map((todo) => {
					if (!todo.isCompleted) {
						todo.isHide = true
					} else {
						todo.isHide = false
					}

					return todo
				})
			})
			setButtons((prev) => {
				return prev.map((btn) => {
					if (btn.id === id) {
						btn.isFocused = true
					} else {
						btn.isFocused = false
					}

					return btn
				})
			})
		}

		handleAction(list)
	}

	return (
		<>
			<Styled.Fonts />
			<Styled.Icons />
			<Styled.Reset />

			<Styled.Wrapper>
				<Styled.Content>
					<Styled.Body>
						<Header />
						<Main list={list} onAction={handleAction} />
						<Footer
							progress={progress}
							buttons={buttons}
							onClick={handleClickButton}
						/>
					</Styled.Body>
				</Styled.Content>
			</Styled.Wrapper>
		</>
	)
}

export default App
