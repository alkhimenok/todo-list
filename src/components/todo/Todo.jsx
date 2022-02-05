import React, { useState } from 'react'
import {
	TodoWrapper,
	TodoButtonDrag,
	TodoLabel,
	TodoCheckbox,
	TodoContent,
	TodoForm,
	TodoButtonChange,
	TodoButtonDelete
} from './styledTodo'

const Todo = ({ todo }) => {
	const { index, isCompleted, content } = todo

	const [todoCompleted, setTodoCompleted] = useState(isCompleted)

	return (
		<TodoWrapper>
			<TodoButtonDrag>
				<i className="icon-drag"></i>
			</TodoButtonDrag>
			<TodoLabel>
				<TodoCheckbox type="checkbox" checked={todoCompleted} onChange={() => setTodoCompleted(prev => !prev)} />
				<TodoContent>{content}</TodoContent>
				<TodoForm>
					<TodoButtonChange>
						<i className="icon-pencil"></i>
					</TodoButtonChange>
					<TodoButtonDelete>
						<i className="icon-bin"></i>
					</TodoButtonDelete>
				</TodoForm>
			</TodoLabel>
		</TodoWrapper>
	)
}

export default Todo
