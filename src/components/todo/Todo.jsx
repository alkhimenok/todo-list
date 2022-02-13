import React from 'react'
import PropTypes from 'prop-types'
import Checkbox from '../UI/checkbox/Checkbox'
import IconButton from '../UI/iconButton/IconButton'
import * as Styled from './styledTodo'
import { useHovered } from './useHovered'

const Todo = ({ id, title, isCompleted, handleClick }) => {
	const { isHovered, onMouseOver, onMouseOut } = useHovered()

	return (
		<Styled.TodoWrapper
			id={id}
			onMouseOver={onMouseOver}
			onMouseOut={onMouseOut}
			onClick={handleClick}
		>
			<Styled.TodoDrag isHovered={isHovered}>
				<IconButton icon={'drag'} isDisable={isCompleted} />
			</Styled.TodoDrag>
			<Checkbox isChecked={isCompleted} />
			<Styled.TodoContent isDisable={isCompleted}>{title}</Styled.TodoContent>
			<Styled.TodoForm>
				<IconButton icon={'pencil'} isDisable={isCompleted} action={'edit'} />
				<IconButton icon={'bin'} isDisable={isCompleted} action={'delete'} />
			</Styled.TodoForm>
		</Styled.TodoWrapper>
	)
}

Todo.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	isCompleted: PropTypes.bool.isRequired,
	handleClick: PropTypes.func
}

export default Todo
