import React from 'react'
import PropTypes from 'prop-types'
import Todo from '../todo/Todo'
import Modal from './modal/Modal'
import * as Styled from './styledList'
import { useAction } from './useAction'

const List = ({ todoList, handleChange }) => {
	const { actionTodo, unchangedValue, onEditTodo, active, setActive } =
		useAction(todoList, handleChange)

	return (
		<Styled.ListWrapper>
			{todoList.map(({ id, title, isCompleted }) => (
				<Todo
					id={id}
					key={id}
					title={title}
					isCompleted={isCompleted}
					handleClick={actionTodo}
				/>
			))}
			<Modal
				unchangedValue={unchangedValue}
				handleApplyChange={onEditTodo}
				isActive={active}
				onActive={setActive}
			/>
		</Styled.ListWrapper>
	)
}

List.propTypes = {
	todoList: PropTypes.array,
	handleChange: PropTypes.func
}

export default List
