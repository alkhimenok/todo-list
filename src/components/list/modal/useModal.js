import { useEffect, useState } from 'react'

export const useModal = (unchangedValue, onSubmit) => {
	const [value, setValue] = useState('')

	useEffect(() => setValue(unchangedValue), [unchangedValue])

	const isDisable = !value.length

	const handleChangeValue = (e) => {
		setValue(e.target.value)
	}

	const handleSubmit = (e) => {
		onSubmit(value)

		e.preventDefault()
	}

	return {
		value,
		isDisable,
		handleChangeValue,
		handleSubmit
	}
}
