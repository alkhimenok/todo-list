import { useState } from 'react'

export const useHovered = () => {
	const [isHovered, setHovered] = useState(false)

	const onMouseOver = () => {
		setHovered(true)
	}

	const onMouseOut = () => {
		setHovered(false)
	}

	return {
		isHovered,
		onMouseOver,
		onMouseOut
	}
}
