import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useBeforeunload } from 'react-beforeunload'
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
	useBeforeunload(() => localStorage.setItem('todo', JSON.stringify(list)))

	const handleDragEnd = (res) => {
		const items = Array.from(list)
		const src = res.source.index
		const dest = res?.destination?.index ?? src
		const [reorderItem] = items.splice(src, 1)

		items.splice(dest, 0, reorderItem)

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
