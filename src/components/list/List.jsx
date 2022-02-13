import React from 'react'
import PropTypes from 'prop-types'
import Todo from '../todo/Todo'
import Modal from './modal/Modal'
import * as Styled from './styledList'
import { useAction } from './useAction'

const List = ({ list, onReplaceList }) => {
	const {
		unchangedValue,
		isActive,
		handleActionTodo,
		handleActive,
		handleApply
	} = useAction(list, onReplaceList)

	return (
		<Styled.ListWrapper>
			{list.map(({ id, title, isCompleted }) => (
				<Todo
					id={id}
					key={id}
					title={title}
					isCompleted={isCompleted}
					onClick={handleActionTodo}
				/>
			))}
			<Modal
				unchangedValue={unchangedValue}
				isActive={isActive}
				onActive={handleActive}
				onApply={handleApply}
			/>
		</Styled.ListWrapper>
	)
}

List.propTypes = {
	list: PropTypes.array,
	onReplaceList: PropTypes.func
}

export default List
