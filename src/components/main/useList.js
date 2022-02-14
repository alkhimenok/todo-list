// import { useState } from 'react'
import { uid } from 'uid'

export const useList = (list, onAction) => {
	const addToList = (title) => {
		const newItem = { id: uid(), title, isCompleted: false, isHide: false }
		const newList = [newItem, ...list]

		setNewList(newList)
	}

	const replaceList = (replacedList) => {
		setNewList(replacedList)
	}

	const setNewList = (newList) => {
		// setList(newList)

		onAction(newList)
	}

	return { list, addToList, replaceList }
}
