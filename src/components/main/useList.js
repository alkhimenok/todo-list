import { useState } from 'react'
import { uid } from 'uid'

export const useList = () => {
	const [list, setList] = useState([])

	const addToList = (content) => {
		setList((prev) => {
			const newItem = { id: uid(), content, isCompleted: false }

			return [newItem, ...prev]
		})
	}

	const replaceList = (newList) => {
		setList(newList)
	}

	return { list, addToList, replaceList }
}
