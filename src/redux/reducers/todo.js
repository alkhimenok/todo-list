import {
	ADD_TODO,
	DELETE_TODO,
	CHECK_TODO,
	CHANGE_TODO,
	UPDATE_TODO,
	HIDE_TODO,
	SHOW_TODO,
	COMPLETED_ALL_TODO,
	UNCOMPLETED_ALL_TODO
} from '@redux/types/todo'

const initialState = JSON.parse(localStorage.getItem('todo')) || []

export const todoReducer = (state = initialState, action) => {
	const { type, payload } = action

	switch (type) {
		case ADD_TODO:
			return [
				{
					id: payload.id,
					title: payload.title,
					isCompleted: false,
					isHide: false
				},
				...state
			]

		case DELETE_TODO:
			return [...state.filter(({ id }) => id !== payload.id)]

		case CHECK_TODO:
			return [
				...state.map((todo) => {
					todo.id === payload.id ? (todo.isCompleted = !todo.isCompleted) : null

					return todo
				})
			]

		case CHANGE_TODO:
			return [
				...state.map((todo) => {
					todo.id === payload.id ? (todo.title = payload.title) : null

					return todo
				})
			]

		case UPDATE_TODO:
			return [...payload.list]

		case HIDE_TODO:
			return [
				...state.map((todo) => {
					todo.id === payload.id ? (todo.isHide = true) : null

					return todo
				})
			]

		case SHOW_TODO:
			return [
				...state.map((todo) => {
					todo.id === payload.id ? (todo.isHide = false) : null

					return todo
				})
			]

		case COMPLETED_ALL_TODO:
			return [
				...state.map((todo) => {
					todo.isCompleted = true

					return todo
				})
			]

		case UNCOMPLETED_ALL_TODO:
			return [
				...state.map((todo) => {
					todo.isCompleted = false

					return todo
				})
			]

		default:
			return state
	}
}
