import { useState } from 'react'

export const useSubmit = (handleSubmit) => {
	const [value, setValue] = useState('')

	const isInputEmpty = !value.length

	const changeValue = (e) => {
		setValue(e.target.value)
	}

	const submitForm = (e) => {
		if (value.trim()) {
			handleSubmit(value)
			setValue('')
		}

		e.preventDefault()
	}

	return {
		value,
		isInputEmpty,
		changeValue,
		submitForm
	}
}
