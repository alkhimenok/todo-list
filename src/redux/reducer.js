import { combineReducers } from 'redux'
import { todoReducer } from '@redux/reducers/todo'
import { buttonReducer } from '@redux/reducers/button'

export const reducer = combineReducers({
	todo: todoReducer,
	button: buttonReducer
})
