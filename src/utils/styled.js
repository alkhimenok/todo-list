const getDisplayFlex = (
	alignItems = 'center',
	justifyContent = 'center',
	flexDirection = 'row',
	flexWrap = 'nowrap'
) => {
	return `
    display: flex;
    align-items: ${alignItems};
    justify-content: ${justifyContent};
    flex-direction: ${flexDirection};
    flex-wrap: ${flexWrap};
  `
}

const getScroll = (
	scrollWidth = '4px',
	trackColor = 'gray',
	thumbColor = 'blue',
	fillets = '10px'
) => {
	return `
    &::-webkit-scrollbar {
      width: ${scrollWidth} !important;
    }
    &::-webkit-scrollbar-track {
      background-color: ${trackColor};
    }
    &::-webkit-scrollbar-thumb {
      background: ${thumbColor};
      border-radius: ${fillets};
    }
  `
}

const forChildren = (styles) => {
	return `
    & > * {
      ${styles}
    }
  `
}

const forFirstChild = (styles) => {
	return `
    & > :first-child{
      ${styles}
    }
  `
}

const forLastChild = (styles) => {
	return `
    & > :last-child{
      ${styles}
    }
  `
}

export { getDisplayFlex, getScroll, forChildren, forFirstChild, forLastChild }
