import { useState } from 'react'

export const useModal = (unchangedValue, isActive, onActive, onApply) => {
	const [newValue, setNewValue] = useState(unchangedValue)

	const isHide = !isActive
	const isDisable = !newValue.length

	const handleChangeValue = (e) => {
		setNewValue(e.target.value)
	}

	const handleHideModal = () => {
		onActive(false)

		setNewValue('')
	}

	const handleSubmitValue = (e) => {
		onApply(newValue)
		handleHideModal()

		e.preventDefault()
	}

	return {
		newValue,
		isHide,
		isDisable,
		handleChangeValue,
		handleHideModal,
		handleSubmitValue
	}
}
