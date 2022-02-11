import { useState } from 'react'

export const useTodo = (isCompleted) => {
	const [hovered, setHovered] = useState(false)
	const [completed, setCompleted] = useState(isCompleted)

	const handleMouseOver = () => {
		setHovered(true)
	}

	const handleMouseOut = () => {
		setHovered(false)
	}

	const handleClick = (e) => {
		if (e.target.tagName !== 'BUTTON') {
			setCompleted(!completed)
		}

		e.preventDefault()
	}

	return {
		handleMouseOver,
		handleMouseOut,
		handleClick,
		completed,
		hovered
	}
}
