import { useState } from 'react'
import { compressElement } from '../../utils/animation'

export const useAction = (list, onReplaceList) => {
	const [unchangedValue, setUnchangedValue] = useState('')
	const [isActive, setActive] = useState(false)
	const [todoId, setTodoId] = useState('')

	const handleActionTodo = (e) => {
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

	const handleActive = () => {
		setActive(false)
	}

	const handleApply = (newTitle) => {
		onReplaceList(
			list.map((todo) => {
				if (todoId === todo.id) {
					todo.title = newTitle
				}

				return todo
			})
		)
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
			onReplaceList(list.filter(({ id }) => id !== currentId))
		}, delay)

		compressElement(currentTodo)
	}

	const toggleCheckedTodo = (currentId) => {
		onReplaceList(
			list.map((todo) => {
				if (currentId === todo.id) {
					todo.isCompleted = !todo.isCompleted
				}

				return todo
			})
		)
	}

	return {
		unchangedValue,
		isActive,
		handleActionTodo,
		handleActive,
		handleApply
	}
}
