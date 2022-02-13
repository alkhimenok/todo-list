import { useState } from 'react'
import { uid } from 'uid'

export const useList = () => {
	const [list, setList] = useState([])

	const addToList = (title) => {
		const newItem = { id: uid(), title, isCompleted: false }
		const newList = [newItem, ...list]

		setNewList(newList)
	}

	const replaceList = (replacedList) => {
		setNewList(replacedList)
	}

	const setNewList = (newList) => {
		setList(newList)
	}

	return { list, addToList, replaceList }
}
