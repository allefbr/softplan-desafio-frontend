import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { WrapperCards } from './style'
import Card from './index'
import MessageIcon from '../Message/icon'
import Loading from '../../components/Icones/Loading'

const Cards = ({ processos, isFetchingProcess, route }) => (
    <WrapperCards>
        { (processos.length > 0) &&
            processos.map((item, index) => 
                <Fragment key={index}>
                    <Card props={item} route={route} />
                </Fragment>
            )
        }
        { isFetchingProcess && <Loading />}
        { (processos.length <= 0 && !isFetchingProcess ) && <MessageIcon />}
    </WrapperCards>
)

const mapStateToProps = (state, props) => ({
    isFetchingProcess: state.processos.isFetchingProcess,
    processos: state.processos.items,
    route: props.route
})

export default connect(mapStateToProps)(Cards)