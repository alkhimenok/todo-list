import { useMemo, useState } from 'react'

export const useModal = (
	unchangedValue,
	handleApplyChange,
	active,
	setActive
) => {
	const [value, setValue] = useState(unchangedValue)

	return {
		value,
		setValue: (e) => setValue(e.target.value),
		isHide: !active,
		hideModal: () => {
			setActive(false)
			setValue('')
		},
		applyChange: (e) => {
			e.preventDefault()

			handleApplyChange(value)
			setActive(false)
			setValue('')
		}
	}
}
