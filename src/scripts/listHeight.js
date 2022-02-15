import * as UNITS from '@constants/units'

export const setListHeight = () => {
	const $body = document.querySelector('#body')
	const $header = document.querySelector('#header')
	// const $main = document.querySelector('#main')
	const $footer = document.querySelector('#footer')
	const $form = document.querySelector('#form')
	const $list = document.querySelector('#list')
	const baseSize = parseFloat(getComputedStyle(document.body).fontSize)
	const intend =
		(parseFloat(UNITS.XL_SIZE) * 2 + parseFloat(UNITS.LG_SIZE)) * baseSize

	const mainHeigth =
		$body.clientHeight -
		$header.clientHeight -
		$footer.clientHeight -
		parseFloat(UNITS.XL_SIZE) * 2 * baseSize

	$list.style.maxHeight = `${mainHeigth - $form.clientHeight - intend}px`

	window.addEventListener('resize', setListHeight)
} // fix
