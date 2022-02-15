import React from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import Todo from '@components/todo/Todo'
import Modal from './modal/Modal'
import * as Styled from './styledList'
import { useList } from './useList'

const List = () => {
	const {
		list,
		unchangedValue,
		isActive,
		handleDragEnd,
		handleClick,
		handleActive,
		handleApply
	} = useList()

	return (
		<DragDropContext onDragEnd={handleDragEnd}>
			<Droppable droppableId='droppable-1'>
				{(provided) => (
					<Styled.ListWrapper id='list' ref={provided.innerRef}>
						{list.map(({ id, title, isCompleted, isHide }, i) => (
							<Draggable draggableId={`draggable-${id}`} index={i} key={id}>
								{(provided) => (
									<div
										ref={provided.innerRef}
										{...provided.draggableProps}
										{...provided.dragHandleProps}
									>
										<Todo
											id={id}
											title={title}
											isCompleted={isCompleted}
											isHide={isHide}
											onClick={handleClick}
										/>
									</div>
								)}
							</Draggable>
						))}
						{provided.placeholder}
						<Modal
							unchangedValue={unchangedValue}
							isActive={isActive}
							onActive={handleActive}
							onApply={handleApply}
						/>
					</Styled.ListWrapper>
				)}
			</Droppable>
		</DragDropContext>
	)
}

export default List
