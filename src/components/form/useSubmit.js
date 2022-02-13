import { useState } from 'react'

export const useSubmit = (handleSubmit) => {
	const [value, setValue] = useState('')

	const isInputEmpty = !value.length

	const handleChangeValue = (e) => {
		setValue(e.target.value)
	}

	const handleAddTodo = (e) => {
		if (value.trim()) {
			handleSubmit(value)
			setValue('')
		}

		e.preventDefault()
	}

	return {
		value,
		isInputEmpty,
		handleChangeValue,
		handleAddTodo
	}
}
