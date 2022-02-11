import React from 'react'
import PropTypes from 'prop-types'
import * as Styled from './styledCheckbox'

const Checkbox = ({ size, isChecked }) => {
	return (
		<Styled.CheckboxWrapper size={size}>
			<Styled.CheckboxLabel isChecked={isChecked}>
				<Styled.CheckboxInput type='checkbox' />
			</Styled.CheckboxLabel>
		</Styled.CheckboxWrapper>
	)
}

Checkbox.propTypes = {
	size: PropTypes.string,
	isChecked: PropTypes.bool
}

export default Checkbox
