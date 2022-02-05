export const getDisplayFlex = (alignItems = 'center', justifyContent = 'center', flexDirection = 'row', flexWrap = 'nowrap') => {
	return `
    display: flex;
    align-items: ${alignItems};
    justify-content: ${justifyContent};
    flex-direction: ${flexDirection};
    flex-wrap: ${flexWrap};
  `
}

export const getScroll = (scrollWidth = '4px', trackColor = 'gray', thumbColor = 'blue', fillets = '10px', isHide = false) => {
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

export const forChildren = styles => {
	return `
    & > * {
      ${styles}
    }
  `
}

export const forFirstChild = styles => {
	return `
    & > :first-child{
      ${styles}
    }
  `
}

export const forLastChild = styles => {
	return `
    & > :last-child{
      ${styles}
    }
  `
}
