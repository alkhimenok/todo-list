import React from 'react'
import PropTypes from 'prop-types'
import * as Styled from './styledIconButton'

const IconButton = ({ icon, size, isDisable, action }) => {
	return (
		<Styled.IconButtonWrapper
			data-action={action}
			icon={icon}
			size={size}
			isDisable={isDisable}
		>
			<Styled.IconButtonPicture className={`icon-${icon}`} />
		</Styled.IconButtonWrapper>
	)
}

IconButton.propTypes = {
	icon: PropTypes.string.isRequired,
	size: PropTypes.string,
	isDisable: PropTypes.bool,
	handleClick: PropTypes.func,
	action: PropTypes.string
}

export default IconButton
