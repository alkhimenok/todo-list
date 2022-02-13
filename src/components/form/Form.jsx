import React from 'react'
import PropTypes from 'prop-types'
import Input from '../UI/input/Input'
import Button from '../UI/button/Button'
import * as Styled from './styledForm'
import { useSubmit } from './useSubmit'

const Form = ({ onAddTodo }) => {
	const { value, isInputEmpty, handleChangeValue, handleAddTodo } =
		useSubmit(onAddTodo)

	return (
		<Styled.FormWrapper onSubmit={handleAddTodo}>
			<Styled.FormInputWrapper>
				<Input
					label={'Add new todo...'}
					value={value}
					onChange={handleChangeValue}
				/>
			</Styled.FormInputWrapper>
			<Styled.FormButtonWrapper isHide={isInputEmpty}>
				<Button content={'Submit'} type={'submit'} isFocused={true} />
			</Styled.FormButtonWrapper>
		</Styled.FormWrapper>
	)
}

Form.propTypes = {
	onAddTodo: PropTypes.func.isRequired
}

export default Form
