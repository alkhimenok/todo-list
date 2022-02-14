import React from 'react'
import PropTypes from 'prop-types'
import * as Styled from './styledCheckbox'

const Checkbox = ({ id, isChecked, size }) => {
	return (
		<Styled.CheckboxWrapper id={id} size={size}>
			<Styled.CheckboxLabel isChecked={isChecked}>
				<Styled.CheckboxInput type='checkbox' />
			</Styled.CheckboxLabel>
		</Styled.CheckboxWrapper>
	)
}

Checkbox.propTypes = {
	id: PropTypes.string,
	isChecked: PropTypes.bool,
	size: PropTypes.string
}

export default Checkbox
