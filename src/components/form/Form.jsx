import React from 'react'
import PropTypes from 'prop-types'
import Button from '../UI/button/Button'
import * as Styled from './styledForm'
import { useSubmit } from './useSubmit'

const Form = ({ handleSubmit }) => {
	const { submitForm, value, changeValue, isInputEmpty } =
		useSubmit(handleSubmit)

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
			<Styled.FormButtonWrapper hide={isInputEmpty}>
				<Button type='submit' content={'Submit'} isFocused={true} />
			</Styled.FormButtonWrapper>
		</Styled.FormWrapper>
	)
}

Form.propTypes = {
	handleSubmit: PropTypes.func.isRequired
}

export default Form
