import React from 'react'
import PropTypes from 'prop-types'
import Checkbox from '../UI/checkbox/Checkbox'
import IconButton from '../UI/iconButton/IconButton'
import * as Styled from './styledTodo'
import { useTodo } from './useTodo'

const Todo = ({ content, isCompleted = false }) => {
	const { handleMouseOver, handleMouseOut, handleClick, completed, hovered } =
		useTodo(isCompleted)

	return (
		<Styled.TodoWrapper
			onMouseOver={handleMouseOver}
			onMouseOut={handleMouseOut}
			onClick={handleClick}
		>
			<Styled.TodoDrag isHovered={hovered}>
				<IconButton icon={'drag'} isDisable={completed} />
			</Styled.TodoDrag>
			<Checkbox isChecked={completed} />
			<Styled.TodoContent isDisable={completed}>{content}</Styled.TodoContent>
			<Styled.TodoForm>
				<IconButton icon={'pencil'} isDisable={completed} />
				<IconButton icon={'bin'} isDisable={completed} />
			</Styled.TodoForm>
		</Styled.TodoWrapper>
	)
}

Todo.propTypes = {
	content: PropTypes.string.isRequired,
	isCompleted: PropTypes.bool
}

export default Todo
