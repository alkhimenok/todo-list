import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Todo from '../todo/Todo'
import Modal from './modal/Modal'
import * as Styled from './styledList'

const List = ({ todoList, handleChange }) => {
	const [currentTodo, setCurrentTodo] = useState(null)
	const [modalActive, setModalActive] = useState(false)
	const [value, setValue] = useState('')

	const changeTodo = (newTodo) => {
		handleChange(
			todoList.map((todo) => {
				if (todo.id === currentTodo.id) {
					todo.content = newTodo
				}

				return todo
			})
		)
	}

	const todoAction = (e) => {
		const {
			currentTarget,
			target: {
				dataset: { action }
			}
		} = e

		const actions = {
			delete() {
				const delay =
					parseFloat(
						window.getComputedStyle(currentTarget).transitionDuration
					) * 1000

				currentTarget.style.overflow = 'hidden'
				currentTarget.style.height = `${currentTarget.clientHeight}px`

				setTimeout(() => (currentTarget.style.height = '0px'), 0)
				setTimeout(() => {
					handleChange(todoList.filter(({ id }) => id !== currentTarget.id))
				}, delay)
			},
			change() {
				setValue(currentTarget.textContent)
				setModalActive(true)
				setCurrentTodo(currentTarget)
			}
		}

		actions[action]()

		e.preventDefault()
	}

	return (
		<Styled.ListWrapper>
			{todoList.map(({ id, content, isCompleted }) => (
				<Todo
					id={id}
					key={id}
					content={content}
					isCompleted={isCompleted}
					handleClick={todoAction}
				/>
			))}
			<Modal
				unchangedValue={value}
				handleApplyChange={changeTodo}
				active={modalActive}
				setActive={setModalActive}
			/>
		</Styled.ListWrapper>
	)
}

List.propTypes = {
	todoList: PropTypes.array,
	handleChange: PropTypes.func
}

export default List
