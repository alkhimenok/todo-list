import {
	ADD_TODO,
	DELETE_TODO,
	HIDE_TODO,
	SHOW_TODO,
	CHECK_TODO,
	CHANGE_TODO,
	COMPLETED_ALL_TODO,
	UNCOMPLETED_ALL_TODO
} from '@redux/types/todo'

const initialState = localStorage.getItem('todoList') || []

export const todoList = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TODO:
			return [
				{
					id: action.payload.id,
					title: action.payload.title,
					isCompleted: false,
					isHide: false
				},
				...state
			]

		case DELETE_TODO:
			return [...state.filter(({ id }) => id !== action.payload.id)]

		case HIDE_TODO:
			return [
				...state.map((todo) => {
					todo.id === action.payload.id ? (todo.isHide = true) : null

					return todo
				})
			]

		case SHOW_TODO:
			return [
				...state.map((todo) => {
					todo.id === action.payload.id ? (todo.isHide = false) : null

					return todo
				})
			]

		case CHECK_TODO:
			return [
				...state.map((todo) => {
					todo.id === action.payload.id
						? (todo.isCompleted = !todo.isCompleted)
						: null

					return todo
				})
			]

		case CHANGE_TODO:
			return [
				...state.map((todo) => {
					todo.id === action.payload.id
						? (todo.title = action.payload.title)
						: null

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
