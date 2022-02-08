import { useState } from 'react'

export const useForm = (handleSubmit) => {
	const [value, setValue] = useState('')

	const submitForm = (e) => {
		handleSubmit()
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
