import {
	FOCUSED_BUTTON,
	UNFOCUSED_BUTTON,
	HIDE_BUTTON,
	SHOW_BUTTON,
	DISABLE_BUTTON,
	UNABLE_BUTTON
} from '@redux/types/button'

const initialState = localStorage.getItem('buttonList') || [
	{
		id: 'checkAll',
		content: 'Check all',
		isFocused: false,
		isHide: true,
		isDisable: false
	},
	{
		id: 'all',
		content: 'All',
		isFocused: false,
		isHide: true,
		isDisable: false
	},
	{
		id: 'active',
		content: 'Active',
		isFocused: false,
		isHide: true,
		isDisable: false
	},
	{
		id: 'completed',
		content: 'Completed',
		isFocused: false,
		isHide: true,
		isDisable: false
	},
	{
		id: 'clearCompleted',
		content: 'Clear completed',
		isFocused: false,
		isHide: true,
		isDisable: false
	}
]

export const buttonList = (state = initialState, action) => {
	switch (action.type) {
		case FOCUSED_BUTTON:
			return [
				...state.map((btn) => {
					btn.id === action.payload.id ? (btn.isFocused = true) : null

					return btn
				})
			]

		case UNFOCUSED_BUTTON:
			return [
				...state.map((btn) => {
					btn.id === action.payload.id ? (btn.isFocused = false) : null

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

		case DISABLE_BUTTON:
			return [
				...state.map((btn) => {
					btn.id === action.payload.id ? (btn.isDisable = true) : null

					return btn
				})
			]

		case UNABLE_BUTTON:
			return [
				...state.map((btn) => {
					btn.id === action.payload.id ? (btn.isDisable = false) : null

					return btn
				})
			]

		default:
			return state
	}
}
