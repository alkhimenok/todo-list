import {
	FOCUSED_BUTTON,
	HIDE_BUTTON,
	SHOW_BUTTON,
	HIDE_EVERY_BUTTON,
	SHOW_EVERY_BUTTON
} from '@redux/types/button'

const focusedButton = (payload) => {
	return { type: FOCUSED_BUTTON, payload } // id
}
const hideButton = (payload) => {
	return { type: HIDE_BUTTON, payload } // id
}
const showButton = (payload) => {
	return { type: SHOW_BUTTON, payload } // id
}
const hideEveryButton = () => {
	return { type: HIDE_EVERY_BUTTON }
}
const showEveryButton = () => {
	return { type: SHOW_EVERY_BUTTON }
}

export {
	focusedButton,
	hideButton,
	showButton,
	hideEveryButton,
	showEveryButton
}
