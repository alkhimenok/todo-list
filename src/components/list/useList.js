import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
	deleteTodo,
	checkTodo,
	changeTodo,
	updateTodo
} from '@redux/actions/todo'
import { compressElement } from '@utils/animation'
import { setListHeight } from '@scripts/listHeight'

export const useList = () => {
	const [unchangedValue, setUnchangedValue] = useState('')
	const [currentId, setCurrentId] = useState('')
	const [isActive, setActive] = useState(false)
	const list = useSelector((state) => state.todo)
	const dispatch = useDispatch()

	useEffect(setListHeight, [list])

	const handleDragEnd = (res) => {
		const items = Array.from(list)
		const [reorderItem] = items.splice(res.source.index, 1)

		items.splice(res.destination.index, 0, reorderItem)

		dispatch(updateTodo({ list: items }))
	}

	const handleClick = (e) => {
		const { currentTarget, target } = e
		const { action } = target.dataset
		const { id, textContent: title } = currentTarget

		if (action === 'delete') {
			deleteCurrentTodo(id, title, currentTarget)
		} else if (action === 'edit') {
			editCurrentTarget(id, title)
		} else if (action === 'drag') {
			return
		} else {
			checkCurrentTodo(id, title)
		}

		e.preventDefault()
	}

	const deleteCurrentTodo = (id, title, currentTodo) => {
		const { transitionDuration } = getComputedStyle(currentTodo)
		const delay = parseFloat(transitionDuration) * 1000

		setTimeout(() => dispatch(deleteTodo({ id, title })), delay)

		compressElement(currentTodo)
	}

	const checkCurrentTodo = (id, title) => {
		dispatch(checkTodo({ id, title }))
	}

	const editCurrentTarget = (id, title) => {
		setUnchangedValue(title)
		setCurrentId(id)
		setActive(true)
	}

	const handleActive = () => {
		setActive(false)
	}

	const handleApply = (newTitle) => {
		setUnchangedValue('')
		setActive(false)
		dispatch(changeTodo({ id: currentId, title: newTitle }))
	}

	return {
		list,
		unchangedValue,
		isActive,
		handleDragEnd,
		handleClick,
		handleActive,
		handleApply
	}
}
