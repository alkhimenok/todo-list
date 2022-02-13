import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import * as UNITS from '../../constants/units'

const Container = ({ isList, children }) => {
	return <ContainerWrapper isList={isList}>{children}</ContainerWrapper>
}

Container.propTypes = {
	isList: PropTypes.bool,
	children: PropTypes.node
}

const ContainerWrapper = styled.div`
	max-width: ${({ isList }) =>
		isList
			? `calc(${UNITS.CONTAINER_WIDTH} + ${UNITS.XL_SIZE} * 2 + ${UNITS.LG_SIZE} * 2)`
			: `calc(${UNITS.CONTAINER_WIDTH} + ${UNITS.XL_SIZE} * 2)`};
	margin: 0 auto;
`

export default Container
