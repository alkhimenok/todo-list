import React from 'react'
import Input from '@components/UI/input/Input'
import Button from '@components/UI/button/Button'
import * as Styled from './styledForm'
import { useForm } from './useForm'

const Form = () => {
	const { value, isHide, handleChange, handleSubmit } = useForm()

	return (
		<Styled.FormWrapper id='form' onSubmit={handleSubmit}>
			<Styled.FormInputWrapper>
				<Input
					label={'Add new todo...'}
					value={value}
					onChange={handleChange}
				/>
			</Styled.FormInputWrapper>
			<Styled.FormButtonWrapper isHide={isHide}>
				<Button content={'Submit'} type={'submit'} isFocused={true} />
			</Styled.FormButtonWrapper>
		</Styled.FormWrapper>
	)
}

export default Form
