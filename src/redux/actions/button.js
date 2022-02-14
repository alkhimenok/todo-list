import {
	FOCUSED_BUTTON,
	UNFOCUSED_BUTTON,
	HIDE_BUTTON,
	SHOW_BUTTON,
	DISABLE_BUTTON,
	UNABLE_BUTTON
} from '@redux/types/button'

const focusedButton = (payload) => {
	return { type: FOCUSED_BUTTON, payload }
}

const unfocusedButton = (payload) => {
	return { type: UNFOCUSED_BUTTON, payload }
}

const hideButton = (payload) => {
	return { type: HIDE_BUTTON, payload }
}

const showButton = (payload) => {
	return { type: SHOW_BUTTON, payload }
}

const disableButton = (payload) => {
	return { type: DISABLE_BUTTON, payload }
}

const unableButton = (payload) => {
	return { type: UNABLE_BUTTON, payload }
}

export {
	focusedButton,
	unfocusedButton,
	hideButton,
	showButton,
	disableButton,
	unableButton
}
