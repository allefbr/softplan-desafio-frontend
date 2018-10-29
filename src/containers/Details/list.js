import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import { fetchProcess, fetchingProcess, fetchingFinishedProcess } from '../../reducers/search/action-creators'
import { Row, Col15, Col85 } from '../../components/Grid'

import Cards from '../../components/Card/cards'
import HeaderActions from '../../components/HeaderPage'
import Loading from '../../components/Icones/Loading'
import ModalRegister from '../../components/ModalRegister'
import MessageContainer from '../../components/Message/container'

import { WrapperPage, ListProcess } from './style'

class DetailsList extends Component {
    constructor(props){
        super(props)
        this.props.hasProcess(props)
    }

    render(){
        return (
            <Fragment>
                <WrapperPage>
                    <HeaderActions params={this.props.match.params.termo} />

                    <ListProcess>
                        <Row>
                            <Col15></Col15>
                            <Col85>
                                {this.props.isFetchingProcess && <Loading />}
                                {!this.props.isFetchingProcess && <Cards route={this.props.match.params} />}
                            </Col85>
                        </Row>
                    </ListProcess>
                </WrapperPage>
                {this.props.isModalOpened && <ModalRegister />}
                <MessageContainer />
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    isDetailsOpened: state.ui.isDetailsOpened,
    isFetchingProcess: state.processos.isFetchingProcess,
    isModalOpened: state.ui.isModalOpened,
    processos: state.processos.items,    
})

const mapDispatchToProps = (dispatch) => ({
    openRegister: () => console.log('Abre o modal!!'),
    handleSearhProcess: async (value) => {
        dispatch(fetchingProcess())
        await dispatch(fetchProcess(value))
        dispatch(fetchingFinishedProcess())
    },    
    hasProcess: (props) => {
        if (Object.keys( props.processos).length <= 0 )
            props.handleSearhProcess( props.match.params.termo )
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailsList)