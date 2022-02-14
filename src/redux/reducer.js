import { combineReducers } from 'redux'
import { todoList } from '@redux/reducers/todo'
import { buttonList } from '@redux/reducers/button'

export const reducer = combineReducers({
	todo: todoList,
	button: buttonList
})
