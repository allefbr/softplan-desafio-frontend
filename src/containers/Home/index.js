import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { openModal } from '../../reducers/ui/action-creators'
import { WrapperPage, MessageInfo } from './style'
import Search from '../../components/Search'
import { HeadTitle } from '../../components/Title'
import { ButtonLinkText } from '../../components/Buttons'
import ModalRegister from '../../components/ModalRegister'
import MessageContainer from '../../components/Message/container'

const Home = ({ isModalOpened, openModal }) => (
  <Fragment>
    <WrapperPage>
        <HeadTitle>Busca de processos</HeadTitle>
        <Search />
        <MessageInfo>
          Você pode criar um novo processo <ButtonLinkText onClick={openModal} title="Adicionar novo processo">clique aqui</ButtonLinkText>
        </MessageInfo>
    </WrapperPage>
    
    {isModalOpened && <ModalRegister />}
    <MessageContainer />
  </Fragment>
)

const mapStateToProps = (state) => ({
  isModalOpened: state.ui.isModalOpened
})

const mapDispatchToProps = (dispatch) => ({
  openModal: () => dispatch( openModal() )
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)