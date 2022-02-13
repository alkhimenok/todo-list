import React from 'react'
import PropTypes from 'prop-types'
import Input from '../../UI/input/Input'
import Button from '../../UI/button/Button'
import * as Styled from './styledModal'
import { useModal } from './useModal'

const Modal = ({ unchangedValue, handleApplyChange, isActive, onActive }) => {
	const { isDisable, newValue, onValue, isHide, hideModal, applyChange } =
		useModal(unchangedValue, handleApplyChange, isActive, onActive)

	return (
		<Styled.ModalWrapper onClick={hideModal} hide={isHide}>
			<Styled.ModalContent onClick={(e) => e.stopPropagation()}>
				<Styled.ModalButtonClose onClick={hideModal} />
				<Styled.ModalTitle>Task change</Styled.ModalTitle>
				<Styled.ModalForm onSubmit={applyChange}>
					<Styled.ModalInputWrapper>
						<Input
							label={'Change todo...'}
							value={newValue}
							handleChange={onValue}
						/>
					</Styled.ModalInputWrapper>
					<Styled.ModalButtonWrapper>
						<Button
							type={'submit'}
							content={'Apply'}
							isFocused={true}
							isDisable={isDisable}
						/>
					</Styled.ModalButtonWrapper>
				</Styled.ModalForm>
			</Styled.ModalContent>
		</Styled.ModalWrapper>
	)
}

Modal.propTypes = {
	unchangedValue: PropTypes.string,
	handleApplyChange: PropTypes.func,
	isActive: PropTypes.bool.isRequired,
	onActive: PropTypes.func.isRequired
}

export default Modal
