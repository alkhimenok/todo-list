import React from 'react'
import Todo from '@components/todo/Todo'
import Modal from './modal/Modal'
import * as Styled from './styledList'
import { useList } from './useList'

const List = () => {
	const {
		list,
		unchangedValue,
		isActive,
		handleClick,
		handleActive,
		handleApply
	} = useList()

	return (
		<Styled.ListWrapper>
			{list.map(({ id, title, isCompleted, isHide }) => (
				<Todo
					id={id}
					key={id}
					title={title}
					isCompleted={isCompleted}
					isHide={isHide}
					onClick={handleClick}
				/>
			))}
			<Modal
				unchangedValue={unchangedValue}
				isActive={isActive}
				onActive={handleActive}
				onSubmit={handleApply}
			/>
		</Styled.ListWrapper>
	)
}

export default List
