import React from 'react'
import PropTypes from 'prop-types'
import * as Styled from './styledIconButton'

const IconButton = ({ icon, size, isDisable }) => {
	return (
		<Styled.IconButtonWrapper icon={icon} size={size} isDisable={isDisable}>
			<Styled.IconButtonPicture className={`icon-${icon}`} />
		</Styled.IconButtonWrapper>
	)
}

IconButton.propTypes = {
	icon: PropTypes.string.isRequired,
	size: PropTypes.string,
	isDisable: PropTypes.bool
}

export default IconButton
