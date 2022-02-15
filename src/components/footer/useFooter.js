import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
	showButton,
	showEveryButton,
	hideEveryButton,
	focusedButton
} from '../../redux/actions/button'
import { showTodo, hideTodo } from '@redux/actions/todo'
import { completedAllTodo, uncompletedAllTodo } from '../../redux/actions/todo'

export const useFooter = () => {
	const dispatch = useDispatch()
	const list = useSelector((state) => state.todo)
	const buttons = useSelector((state) => state.button)
	const numberOfTask = list.filter((todo) => todo.isCompleted).length
	const totalTasks = list.length

	const checkNav = () => {
		dispatch(hideEveryButton())

		if (list.every((todo) => todo.isCompleted)) {
			dispatch(showButton({ id: 'clearCompleted' }))
			dispatch(showButton({ id: 'all' }))
			dispatch(focusedButton({ id: 'all' }))
		} else if (list.every((todo) => !todo.isCompleted)) {
			dispatch(showButton({ id: 'checkAll' }))
			dispatch(showButton({ id: 'all' }))
			dispatch(focusedButton({ id: 'all' }))
		} else {
			dispatch(showEveryButton())
		}
	}

	useEffect(() => checkNav(), [list])

	const handleClick = (e) => {
		const { id } = e.target

		list.forEach((todo) => {
			dispatch(showTodo({ id: todo.id }))
		})
		dispatch(focusedButton({ id }))

		if (id === 'active') {
			list.forEach((todo) => {
				if (todo.isCompleted) {
					dispatch(hideTodo({ id: todo.id }))
				}

				dispatch(focusedButton({ id }))
			})
		} else if (id === 'completed') {
			list.forEach((todo) => {
				if (!todo.isCompleted) {
					dispatch(hideTodo({ id: todo.id }))
				}

				dispatch(focusedButton({ id }))
			})
		} else if (id === 'checkAll') {
			// list.forEach((todo) => {
			dispatch(completedAllTodo())
			// })
		} else if (id === 'clearCompleted') {
			dispatch(uncompletedAllTodo())
		}

		e.preventDefault()
	}

	return { totalTasks, numberOfTask, buttons, handleClick }
}
