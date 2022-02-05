import React, { useState } from 'react'
import { FormWrapper, FormFieldset, FormInput, FormLabel, FormButton } from './styledForm'

const Form = ({ handleSubmit }) => {
	const [value, setValue] = useState('')

	return (
		<FormWrapper onSubmit={handleSubmit}>
			<FormFieldset>
				<FormInput type="text" value={value} placeholder=" " onChange={e => setValue(e.target.value)} />
				<FormLabel>Add new todo...</FormLabel>
			</FormFieldset>
			<FormButton type="submit" hide={value.length ? false : true}>
				Submit
			</FormButton>
		</FormWrapper>
	)
}

export default Form
