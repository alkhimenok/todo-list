import React from 'react'
import PropTypes from 'prop-types'
import { ButtonWrapper } from './styledButton'

const Button = ({ content, isFocused, isHide }) => {
	return <ButtonWrapper isFocused={isFocused}>{content}</ButtonWrapper>
}

Button.propTypes = {
	content: PropTypes.string.isRequired,
	isFocused: PropTypes.bool,
	isHide: PropTypes.bool
}

export default Button
