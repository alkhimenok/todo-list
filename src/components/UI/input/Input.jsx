import React from 'react'
import PropTypes from 'prop-types'
import * as Styled from './styledInput'

const Input = ({ id, label, value, onChange }) => {
	return (
		<Styled.InputFieldset>
			<Styled.InputWrapper
				id={id}
				type='text'
				placeholder=' '
				value={value}
				onChange={onChange}
			/>
			<Styled.InputLabel>{label}</Styled.InputLabel>
		</Styled.InputFieldset>
	)
}

Input.propTypes = {
	id: PropTypes.string,
	label: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func
}

export default Input
