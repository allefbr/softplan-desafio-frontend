import React, { Component } from 'react'
import { connect } from 'react-redux'
import Modal from '../../components/Modal'
import Form from '../../components/Form'

import { closeModal, openMessageSuccess, closeMessages, openMessageError } from '../../reducers/ui/action-creators'

class ModalRegister extends Component {
    render(){
        return (
            <Modal>
                <h2>Cadastro de processo</h2>
                <Form bag={ this.props } />
            </Modal>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    openMessageSuccess: () => dispatch(openMessageSuccess()),
    openMessageError: () => dispatch(openMessageError()),
    closeMessageTimer: () => setTimeout(() => dispatch(closeMessages()), 3000)
})

export default connect(null, mapDispatchToProps)(ModalRegister)