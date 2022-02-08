import React from 'react'
import PropTypes from 'prop-types'
import * as Styled from './styledForm'
import { useForm } from './useForm'

const Form = ({ handleSubmit }) => {
	const { submitForm, value, changeValue, isInputEmpty } = useForm(handleSubmit)

	return (
		<Styled.FormWrapper onSubmit={submitForm}>
			<Styled.FormFieldset>
				<Styled.FormInput
					type='text'
					placeholder=' '
					value={value}
					onChange={changeValue}
				/>
				<Styled.FormLabel>Add new todo...</Styled.FormLabel>
			</Styled.FormFieldset>
			<Styled.FormButton type='submit' hide={isInputEmpty}>
				Submit
			</Styled.FormButton>
		</Styled.FormWrapper>
	)
}

Form.propTypes = {
	handleSubmit: PropTypes.func.isRequired
}

export default Form
