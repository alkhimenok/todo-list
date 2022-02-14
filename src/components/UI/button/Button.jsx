import React from 'react'
import PropTypes from 'prop-types'
import { ButtonWrapper } from './styledButton'

const Button = ({ id, content, type, isFocused, isHide, isDisable }) => {
	return (
		<ButtonWrapper
			id={id}
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
	id: PropTypes.string,
	content: PropTypes.string.isRequired,
	type: PropTypes.string,
	isFocused: PropTypes.bool,
	isHide: PropTypes.bool,
	isDisable: PropTypes.bool
}

export default Button
