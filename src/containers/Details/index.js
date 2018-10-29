import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import { fetchProcess, fetchingProcess, fetchingFinishedProcess } from '../../reducers/search/action-creators'
import { fetchProcessID } from '../../reducers/details/action-creators'
import { Row, Col15, Col40, Col60, Col85 } from '../../components/Grid'
import Cards from '../../components/Card/cards'
import DetailsInfo from '../../components/Details'
import Loading from '../../components/Icones/Loading'
import ModalRegister from '../../components/ModalRegister'
import HeaderActions from '../../components/HeaderPage'
import MessageContainer from '../../components/Message/container'

import { WrapperPage, ListProcess, WrapperGrid} from './style'

class Details extends Component {
    constructor(props){
        super(props)

        this.props.hasProcess(props)
        this.props.hasDetails(props)
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
                                {!this.props.isFetchingProcess && 

                                <WrapperGrid>
                                    <Col40>
                                        <Cards route={this.props.match.params} />
                                    </Col40>
                                    
                                    <Col60>
                                        <DetailsInfo route={this.props.match.params} />
                                    </Col60>
                                </WrapperGrid>}
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
    details: state.details.item    
})

const mapDispatchToProps = (dispatch) => ({
    openRegister: () => console.log('Abre o modal!!'),
    handleSearhProcess: async (value) => {
        dispatch(fetchingProcess())
        await dispatch(fetchProcess(value))
        dispatch(fetchingFinishedProcess())
    },
    handleDetailProcess: async (id) => await dispatch(fetchProcessID(id)),
    hasProcess: (props) => {
        if (Object.keys( props.processos).length <= 0 )
            props.handleSearhProcess( props.match.params.termo )
    },
    hasDetails: (props) => {
        if (Object.keys( props.details).length <= 0)
            props.handleDetailProcess(props.match.params.id)
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(Details)