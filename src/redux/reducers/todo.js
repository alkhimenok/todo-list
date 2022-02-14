import {
	ADD_TODO,
	DELETE_TODO,
	HIDE_TODO,
	SHOW_TODO,
	CHECK_TODO,
	CHANGE_TODO
} from '@redux/types/list'

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

		default:
			return state
	}
}
