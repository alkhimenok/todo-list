import { useState } from 'react'

export const useModal = (
	unchangedValue,
	handleApplyChange,
	isActive,
	onActive
) => {
	const [newValue, setNewValue] = useState(unchangedValue)

	const isDisable = !newValue.length

	const onValue = (e) => {
		setNewValue(e.target.value)
	}

	const isHide = !isActive

	const hideModal = () => {
		onActive(false)

		setNewValue('')
	}

	const applyChange = (e) => {
		handleApplyChange(newValue)
		hideModal()

		e.preventDefault()
	}

	return {
		isDisable,
		newValue,
		onValue,
		isHide,
		hideModal,
		applyChange
	}
}
