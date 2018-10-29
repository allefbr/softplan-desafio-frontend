import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { MessageSucess, MessageError, MessageButtonClose } from './index'
import { closeMessages } from '../../reducers/ui/action-creators'

const MessageContainer = ({ isSucess, isError, closeMessages }) => (
    <Fragment>
        {isSucess && 
            
            <MessageSucess>
                Processo cadastrado com sucesso!
                <MessageButtonClose onClick={closeMessages}>&times;</MessageButtonClose>
            </MessageSucess>
        }
        {isError &&
            <MessageError>
                Ocorreu um erro inesperado, por favor tente mais tarde!
                <MessageButtonClose error onClick={closeMessages}>&times;</MessageButtonClose>
            </MessageError>
        }
    </Fragment>
)

const mapStateToProps = state => ({
    isSucess: state.ui.isMessage.sucess,
    isError: state.ui.isMessage.error,
})

const mapDispatchToProps = dispatch => ({
    closeMessages: () => dispatch(closeMessages())
})

export default connect(mapStateToProps, mapDispatchToProps)(MessageContainer)