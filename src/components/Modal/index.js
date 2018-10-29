import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { closeModal } from '../../reducers/ui/action-creators'
import { Overlay, ModalClose, ModalWrapper, ModalContainer, ModalTitle } from './style'

const Modal = ({ closeModal, title, children }) => (
    <Fragment>
        <Overlay />
        
        <ModalWrapper>
            <ModalClose onClick={closeModal}>&times;</ModalClose>            
            <ModalTitle>{ title }</ModalTitle>
            <ModalContainer>{ children }</ModalContainer>
        </ModalWrapper>
    </Fragment>
)

const mapDispatchToProps = (dispatch) => ({
    closeModal: () => dispatch(closeModal()) ,
})

export default connect(null, mapDispatchToProps)(Modal)