import React from 'react'
import PropTypes from 'prop-types'
import Input from '../UI/input/Input'
import Button from '../UI/button/Button'
import * as Styled from './styledForm'
import { useSubmit } from './useSubmit'

const Form = ({ handleSubmit }) => {
	const { value, isInputEmpty, changeValue, submitForm } =
		useSubmit(handleSubmit)

	return (
		<Styled.FormWrapper onSubmit={submitForm}>
			<Styled.FormInputWrapper>
				<Input
					label={'Add new todo...'}
					value={value}
					handleChange={changeValue}
				/>
			</Styled.FormInputWrapper>
			<Styled.FormButtonWrapper isHide={isInputEmpty}>
				<Button type={'submit'} content={'Submit'} isFocused={true} />
			</Styled.FormButtonWrapper>
		</Styled.FormWrapper>
	)
}

Form.propTypes = {
	handleSubmit: PropTypes.func.isRequired
}

export default Form
