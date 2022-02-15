import React from 'react'
import PropTypes from 'prop-types'
import Checkbox from '@components/UI/checkbox/Checkbox'
import IconButton from '@components/UI/iconButton/IconButton'
import * as Styled from './styledTodo'
import { useHovered } from './useHovered'

const Todo = ({ id, title, isCompleted, isHide, onClick }) => {
	const { isHovered, handleMouseOver, handleMouseOut } = useHovered()

	return (
		<Styled.TodoWrapper
			id={id}
			isHide={isHide}
			draggable={true}
			onMouseOver={handleMouseOver}
			onMouseOut={handleMouseOut}
			onClick={onClick}
		>
			<Styled.TodoDrag isHovered={isHovered}>
				<IconButton icon={'drag'} isDisable={isCompleted} action={'drag'} />
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
	isHide: PropTypes.bool,
	onClick: PropTypes.func
}

export default Todo
