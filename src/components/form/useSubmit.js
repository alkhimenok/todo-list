import { useState } from 'react'

export const useSubmit = (handleSubmit) => {
	const [value, setValue] = useState('')

	const submitForm = (e) => {
		handleSubmit(value)
		setValue('')

		e.preventDefault()
	}

	const changeValue = (e) => {
		setValue(e.target.value)
	}

	const isInputEmpty = !value.length

	return {
		submitForm,
		value,
		changeValue,
		isInputEmpty
	}
}
