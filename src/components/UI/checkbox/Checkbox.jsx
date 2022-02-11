import React from 'react'
import PropTypes from 'prop-types'
import * as Styled from './styledCheckbox'

const Checkbox = ({ isChecked, size }) => {
	return (
		<Styled.CheckboxWrapper size={size}>
			<Styled.CheckboxLabel isChecked={isChecked}>
				<Styled.CheckboxInput type='checkbox' />
			</Styled.CheckboxLabel>
		</Styled.CheckboxWrapper>
	)
}

Checkbox.propTypes = {
	isChecked: PropTypes.bool,
	size: PropTypes.string
}

export default Checkbox
