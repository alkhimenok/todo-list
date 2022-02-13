import React from 'react'
import PropTypes from 'prop-types'
import Input from '../../UI/input/Input'
import Button from '../../UI/button/Button'
import * as Styled from './styledModal'
import { useModal } from './useModal'

const Modal = ({ unchangedValue, handleApplyChange, active, setActive }) => {
	const { value, setValue, isHide, hideModal, applyChange } = useModal(
		unchangedValue,
		handleApplyChange,
		active,
		setActive
	)

	return (
		<Styled.ModalWrapper onClick={hideModal} hide={isHide}>
			<Styled.ModalContent onClick={(e) => e.stopPropagation()}>
				<Styled.ModalButtonClose onClick={hideModal} />
				<Styled.ModalTitle>Task change</Styled.ModalTitle>
				<Styled.ModalForm onSubmit={applyChange}>
					<Styled.ModalInputWrapper>
						<Input
							label={'Change todo...'}
							value={value}
							handleChange={setValue}
						/>
					</Styled.ModalInputWrapper>
					<Styled.ModalButtonWrapper>
						<Button type='submit' content={'Apply'} isFocused={true} />
					</Styled.ModalButtonWrapper>
				</Styled.ModalForm>
			</Styled.ModalContent>
		</Styled.ModalWrapper>
	)
}

Modal.propTypes = {
	unchangedValue: PropTypes.string,
	handleApplyChange: PropTypes.func,
	active: PropTypes.bool.isRequired,
	setActive: PropTypes.func.isRequired
}

export default Modal
