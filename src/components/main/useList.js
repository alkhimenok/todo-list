import { useState } from 'react'
import { uid } from 'uid'

export const useList = () => {
	const [list, setList] = useState([])

	const addToList = (title) => {
		setList((prev) => {
			const newItem = { id: uid(), title, isCompleted: false }

			return [newItem, ...prev]
		})
	}

	const replaceList = (newList) => {
		setList(newList)
	}

	return { list, addToList, replaceList }
}
