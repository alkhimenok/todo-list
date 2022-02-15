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

// list
const addTodo = (payload) => {
	return { type: ADD_TODO, payload } // id, title
}
const deleteTodo = (payload) => {
	return { type: DELETE_TODO, payload } // id
}
const checkTodo = (payload) => {
	return { type: CHECK_TODO, payload } // id
}
const changeTodo = (payload) => {
	return { type: CHANGE_TODO, payload } // id, title
}
const updateTodo = (payload) => {
	return { type: UPDATE_TODO, payload } // list
}
// filter
const hideTodo = (payload) => {
	return { type: HIDE_TODO, payload } // id
}
const showTodo = (payload) => {
	return { type: SHOW_TODO, payload } // id
}
const completedAllTodo = () => {
	return { type: COMPLETED_ALL_TODO } //
}
const uncompletedAllTodo = () => {
	return { type: UNCOMPLETED_ALL_TODO } //
}

export {
	addTodo,
	deleteTodo,
	checkTodo,
	changeTodo,
	updateTodo,
	hideTodo,
	showTodo,
	completedAllTodo,
	uncompletedAllTodo
}
