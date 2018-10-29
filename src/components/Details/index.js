import React from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { closeDetails, cleanProcess, fetchRemoveProcess } from '../../reducers/details/action-creators'
import { ButtonOutlineWhiteSmall } from '../../components/Buttons'
import { 
    DetailItem, 
    DetailsClose, 
    DetailsHeader, 
    DetailsFigure, 
    DetailsHeaderInfos, 
    DetailsHeaderRow,
    DetailsSectionInfos,
    DetailsFooterInfos
} from './style'

import TextInfo from '../TextInfo'

const Details = ({ processo, closeDetails, deleteDetails }) => {
    const { 
        numero, 
        entrada, 
        assunto, 
        descricao, 
        interessados 
    } = processo;

    return ( 
        <DetailItem>        
            <DetailsClose onClick={closeDetails} >&times;</DetailsClose>

            <DetailsHeader>
                <DetailsFigure />

                <DetailsHeaderInfos>

                    <DetailsHeaderRow>
                        <TextInfo title="Processo" desc={ numero } />
                        <TextInfo title="Data" desc={ entrada } />
                    </DetailsHeaderRow>

                    <DetailsHeaderRow>
                        <TextInfo title="Assunto" desc={ assunto } />
                    </DetailsHeaderRow>

                </DetailsHeaderInfos>
            </DetailsHeader>

            <DetailsSectionInfos>
                <TextInfo title="Interessados" desc={ interessados } list={true} />
                <TextInfo title="Descrição" desc={ descricao } />
            </DetailsSectionInfos>                

            <DetailsFooterInfos>                
                <ButtonOutlineWhiteSmall onClick={deleteDetails} type="button" title="Remover processo">Remover</ButtonOutlineWhiteSmall>
            </DetailsFooterInfos>
        </DetailItem>
    )
}

const mapStateToProps = (state) => ({
    processo: state.details.item
})

const mapDispatchToProps = (dispatch, props) => ({
    closeDetails: () => {        
        dispatch(cleanProcess())
        dispatch(push(`/detalhes/${props.route.termo}`)) 
        dispatch(closeDetails())
    },

    deleteDetails: (e) => {
        e.preventDefault();        
        dispatch(fetchRemoveProcess(props.route.id))
        dispatch(push(`/detalhes/${props.route.termo}`))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Details)

