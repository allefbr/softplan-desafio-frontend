import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import { fetchProcess, fetchingProcess, fetchingFinishedProcess } from '../../reducers/search/action-creators'
import { openModal } from '../../reducers/ui/action-creators'
import { Row, Col15, Col85 } from '../../components/Grid'
import Cards from '../../components/Card/cards'
import HeaderActions from '../../components/HeaderPage'
import ModalRegister from '../../components/ModalRegister'
import MessageContainer from '../../components/Message/container'

import { WrapperPage, ListProcess } from './style'

class SearchPage extends Component {
    constructor(props){
        super(props)
        
        if (Object.keys(this.props.processos).length <= 0)
            this.props.handleSearhProcess(props.match.params.termo)
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
                                <Cards route={this.props.match.params} />
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
    isModalOpened: state.ui.isModalOpened,
    processos: state.processos.items
})

const mapDispatchToProps = (dispatch) => ({
    openModal: () => dispatch( openModal() ),
    handleSearhProcess: async (value) => {
        dispatch(fetchingProcess())
        await dispatch(fetchProcess(value))
        dispatch(fetchingFinishedProcess())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)