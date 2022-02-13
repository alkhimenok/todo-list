import React from 'react'
import PropTypes from 'prop-types'
import Input from '../../UI/input/Input'
import Button from '../../UI/button/Button'
import * as Styled from './styledModal'
import { useModal } from './useModal'

const Modal = ({ unchangedValue, isActive, onActive, onApply }) => {
	const {
		newValue,
		isHide,
		isDisable,
		handleChangeValue,
		handleHideModal,
		handleSubmitValue
	} = useModal(unchangedValue, isActive, onActive, onApply)

	return (
		<Styled.ModalWrapper onClick={handleHideModal} isHide={isHide}>
			<Styled.ModalContent onClick={(e) => e.stopPropagation()}>
				<Styled.ModalButtonClose onClick={handleHideModal} />
				<Styled.ModalTitle>Task change</Styled.ModalTitle>
				<Styled.ModalForm onSubmit={handleSubmitValue}>
					<Styled.ModalInputWrapper>
						<Input
							label={'Change todo...'}
							value={newValue}
							onChange={handleChangeValue}
						/>
					</Styled.ModalInputWrapper>
					<Styled.ModalButtonWrapper>
						<Button
							content={'Apply'}
							type={'submit'}
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
	isActive: PropTypes.bool.isRequired,
	onActive: PropTypes.func.isRequired,
	onApply: PropTypes.func
}

export default Modal
