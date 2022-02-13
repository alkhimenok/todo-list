import React from 'react'
import PropTypes from 'prop-types'
import { ButtonWrapper } from './styledButton'

const Button = ({ content, type, isFocused, isHide, isDisable }) => {
	return (
		<ButtonWrapper
			type={type}
			isFocused={isFocused}
			isHide={isHide}
			isDisable={isDisable}
		>
			{content}
		</ButtonWrapper>
	)
}

Button.propTypes = {
	content: PropTypes.string.isRequired,
	type: PropTypes.string,
	isFocused: PropTypes.bool,
	isHide: PropTypes.bool,
	isDisable: PropTypes.bool
}

export default Button
