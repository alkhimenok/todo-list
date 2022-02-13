import { useState } from 'react'
import { compressElement } from '../../utils/animation'

export const useAction = (todoList, handleChange) => {
	const [unchangedValue, setUnchangedValue] = useState('')
	const [active, setActive] = useState(false)
	const [todoId, setTodoId] = useState('')

	const actionTodo = (e) => {
		const { currentTarget } = e
		const { id } = currentTarget
		const { action } = e.target.dataset

		if (action === 'edit') {
			editTodo(currentTarget, id)
		} else if (action === 'delete') {
			deleteTodo(currentTarget, id)
		} else {
			toggleCheckedTodo(id)
		}

		e.preventDefault()
	}

	const editTodo = (currentTodo, currentId) => {
		setUnchangedValue(currentTodo.textContent)
		setActive(true)
		setTodoId(currentId)
	}

	const deleteTodo = (currentTodo, currentId) => {
		const { transitionDuration } = getComputedStyle(currentTodo)
		const delay = parseFloat(transitionDuration) * 1000

		setTimeout(() => {
			handleChange(todoList.filter(({ id }) => id !== currentId))
		}, delay)

		compressElement(currentTodo)
	}

	const toggleCheckedTodo = (currentId) => {
		handleChange(
			todoList.map((todo) => {
				if (currentId === todo.id) {
					todo.isCompleted = !todo.isCompleted
				}

				return todo
			})
		)
	}

	const onEditTodo = (newTitle) => {
		handleChange(
			todoList.map((todo) => {
				if (todoId === todo.id) {
					todo.title = newTitle
				}

				return todo
			})
		)
	}

	return {
		actionTodo,
		unchangedValue,
		onEditTodo,
		active,
		setActive
	}
}
