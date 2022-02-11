import React from 'react'
import PropTypes from 'prop-types'
// import styled from 'styled-components'
import * as UNITS from '../../constants/units'

const Container = ({ width, children }) => {
	return (
		<div
			style={{
				maxWidth:
					width || `calc(${UNITS.CONTAINER_WIDTH} + ${UNITS.XL_SIZE} * 2)`,
				margin: '0 auto'
			}}
		>
			{children}
		</div>
	)
	// return <ContainerWrapper width={width}>{children}</ContainerWrapper>
}

Container.propTypes = {
	width: PropTypes.string,
	children: PropTypes.node
}

// const ContainerWrapper = styled.div`
// 	max-width: ${({ width }) =>
// 		width || `calc(${UNITS.CONTAINER_WIDTH} + ${UNITS.XL_SIZE} * 2)`};
// 	margin: 0 auto;
// `

export default Container
