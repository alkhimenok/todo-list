import * as UNITS from '@constants/units'

export const setListHeight = () => {
	const $main = document.querySelector('#main')
	const $form = document.querySelector('#form')
	const $list = document.querySelector('#list')

	const baseSize = parseFloat(getComputedStyle(document.body).fontSize)

	const intend =
		(parseFloat(UNITS.XL_SIZE) * 2 + parseFloat(UNITS.LG_SIZE)) * baseSize

	$list.style.maxHeight = `${
		$main.clientHeight - $form.clientHeight - intend
	}px`

	window.addEventListener('resize', setListHeight)
}
