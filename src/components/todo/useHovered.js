import { useState } from 'react'

export const useHovered = () => {
	const [isHovered, setHovered] = useState(false)

	const handleMouseOver = () => {
		setHovered(true)
	}

	const handleMouseOut = () => {
		setHovered(false)
	}

	return {
		handleMouseOver,
		handleMouseOut,
		isHovered
	}
}
