import React from 'react'
import { connect } from 'react-redux'
import { fetchProcessID, openDetails } from '../../reducers/details/action-creators'
import { push } from 'connected-react-router'
import { CardItem, CardItemFigure } from './style'
import TextInfo from '../TextInfo'
import { maxCaracter } from '../../utils'

const Card = ({ props, openDetails, isDetail, activeProcesso }) => (
    <CardItem onClick={ openDetails } active={activeProcesso(props.id)} details={isDetail}>
        {isDetail && <CardItemFigure />}

        <TextInfo title="Número" desc={ props.numero } />
        <TextInfo title="Assunto" desc={ props.assunto } />
        <TextInfo title="Interessado" desc={ props.interessados[0] } />

        {isDetail && <TextInfo title="Descrição" desc={maxCaracter(props.descricao, 22)} /> }
    </CardItem>
)

const mapStateToProps = (state, props) => ({
    isDetailsOpened: state.ui.isDetailsOpened,
    location: state.router.location.pathname,
    isDetail: (Object.keys(props.route).length <= 1)
})

const mapDispatchToProps = (dispatch, props) => ({ 
    openDetails: (e) => {
        e.preventDefault()       
        const {id} = props.props
        const URL = `/detalhes/${props.route.termo}/${id}`
        
        dispatch( push(URL) )
        dispatch( openDetails() )
        dispatch( fetchProcessID(id) )
    },
    activeProcesso: (id ) => props.route.id === id    
})

export default connect(mapStateToProps, mapDispatchToProps)(Card)