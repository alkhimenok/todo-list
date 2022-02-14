import {
	ADD_TODO,
	DELETE_TODO,
	HIDE_TODO,
	SHOW_TODO,
	CHECK_TODO,
	CHANGE_TODO
} from '@redux/types/list'

const addTodo = (payload) => {
	return { type: ADD_TODO, payload }
}

const deleteTodo = (payload) => {
	return { type: DELETE_TODO, payload }
}

const hideTodo = (payload) => {
	return { type: HIDE_TODO, payload }
}

const showTodo = (payload) => {
	return { type: SHOW_TODO, payload }
}

const checkTodo = (payload) => {
	return { type: CHECK_TODO, payload }
}

const changeTodo = (payload) => {
	return { type: CHANGE_TODO, payload }
}

export { addTodo, deleteTodo, hideTodo, showTodo, checkTodo, changeTodo }
