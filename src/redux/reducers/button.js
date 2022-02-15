import {
	FOCUSED_BUTTON,
	HIDE_BUTTON,
	SHOW_BUTTON,
	HIDE_EVERY_BUTTON,
	SHOW_EVERY_BUTTON
} from '@redux/types/button'

const defaultButton = [
	{ id: 'checkAll', content: 'Check all' },
	{ id: 'all', content: 'All' },
	{ id: 'active', content: 'Active' },
	{ id: 'completed', content: 'Completed' },
	{ id: 'clearCompleted', content: 'Clear completed' }
].map((btn) => {
	btn.isFocused = false
	btn.isHide = true
	btn.isDisable = false

	return btn
})

const initialState = localStorage.getItem('buttonList') || defaultButton

export const buttonReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOCUSED_BUTTON:
			return [
				...state.map((btn) => {
					btn.id === action.payload.id
						? (btn.isFocused = true)
						: (btn.isFocused = false)

					return btn
				})
			]

		case HIDE_BUTTON:
			return [
				...state.map((btn) => {
					btn.id === action.payload.id ? (btn.isHide = true) : null

					return btn
				})
			]

		case SHOW_BUTTON:
			return [
				...state.map((btn) => {
					btn.id === action.payload.id ? (btn.isHide = false) : null

					return btn
				})
			]

		case HIDE_EVERY_BUTTON:
			return [
				...state.map((btn) => {
					btn.isHide = true

					return btn
				})
			]

		case SHOW_EVERY_BUTTON:
			return [
				...state.map((btn) => {
					btn.isHide = false

					return btn
				})
			]

		default:
			return state
	}
}
