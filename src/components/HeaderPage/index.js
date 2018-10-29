import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { openModal } from '../../reducers/ui/action-creators'
import { isPage } from '../../utils'
import { Row, Col15 } from '../../components/Grid'
import Search from '../../components/Search'
import { Title } from '../../components/Title'
import { ButtonOutlineWhite } from '../../components/Buttons'
import { HeaderPage, WrapperHeaderForm } from './style'

const Header = ({ params, openModal }) => (
    <HeaderPage>
        <Row>
            <Col15>
                <Title>
                    <Link to="/" title="Ir para página inicial"> Busca de processos</Link>
                </Title>
            </Col15>

            <WrapperHeaderForm>
                <Search termo={params.termo} route={isPage('buscar')} />
                <ButtonOutlineWhite type="button" onClick={openModal} title="Adicionar novo processo" >Novo</ButtonOutlineWhite>
            </WrapperHeaderForm>
        </Row>
    </HeaderPage>
)

const mapStateToProps = (state) => ({    
    isModalOpened: state.ui.isModalOpened,        
})

const mapDispatchToProps = (dispatch) => ({
    openModal: () => dispatch( openModal() ),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)