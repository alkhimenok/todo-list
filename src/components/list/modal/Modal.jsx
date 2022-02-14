import React from 'react'
import PropTypes from 'prop-types'
import Input from '@components/UI/input/Input'
import Button from '@components/UI/button/Button'
import * as Styled from './styledModal'
import { useModal } from './useModal'

const Modal = ({ unchangedValue, isActive, onActive, onSubmit }) => {
	const { value, isDisable, handleChangeValue, handleSubmit } = useModal(
		unchangedValue,
		onSubmit
	)

	return (
		<Styled.ModalWrapper onClick={onActive} isHide={!isActive}>
			<Styled.ModalContent onClick={(e) => e.stopPropagation()}>
				<Styled.ModalButtonClose onClick={onActive} />
				<Styled.ModalTitle>Task change</Styled.ModalTitle>
				<Styled.ModalForm onSubmit={handleSubmit}>
					<Styled.ModalInputWrapper>
						<Input
							label={'Change todo...'}
							value={value}
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
	onSubmit: PropTypes.func
}

export default Modal
