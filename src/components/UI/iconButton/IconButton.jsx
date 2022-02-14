import React from 'react'
import PropTypes from 'prop-types'
import * as Styled from './styledIconButton'

const IconButton = ({ id, icon, isDisable, size, action }) => {
	return (
		<Styled.IconButtonWrapper
			id={id}
			icon={icon}
			isDisable={isDisable}
			size={size}
			data-action={action}
		>
			<Styled.IconButtonPicture className={`icon-${icon}`} />
		</Styled.IconButtonWrapper>
	)
}

IconButton.propTypes = {
	id: PropTypes.string,
	icon: PropTypes.string.isRequired,
	size: PropTypes.string,
	isDisable: PropTypes.bool,
	handleClick: PropTypes.func,
	action: PropTypes.string
}

export default IconButton
