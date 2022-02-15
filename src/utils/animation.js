const compressElement = (element) => {
	element.style.overflow = 'hidden'
	element.style.height = `${element.clientHeight}px`

	setTimeout(() => (element.style.height = '0px'), 0)
}

export { compressElement }
