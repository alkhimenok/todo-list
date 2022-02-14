import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { uid } from 'uid'
import { addTodo } from '@redux/actions/todo'

export const useForm = () => {
	const [value, setValue] = useState('')
	const dispatch = useDispatch()

	const isHide = !value.length

	const handleChange = (e) => {
		setValue(e.target.value)
	}

	const handleSubmit = (e) => {
		if (value.length) {
			dispatch(addTodo({ id: uid(), title: value }))
			setValue('')
		}

		e.preventDefault()
	}

	return { value, isHide, handleChange, handleSubmit }
}
