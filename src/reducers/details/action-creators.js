import { ADD_PROCESS, CLEAN_PROCESS, OPEN_DETAILS, REMOVE_PROCESS, CLOSE_DETAILS, FETCHING_PROCESS, FETCH_FINISHED_PROCESS } from './actions'
import { BuscarPorID, Deletar } from '../../config/server'

export const cleanProcess = () => ({
    type: CLEAN_PROCESS,
    payload: {}
})

export const openDetails = () => ({
    type: OPEN_DETAILS
})

export const closeDetails = () => ({
    type: CLOSE_DETAILS
})

export const addProcess = (data) => ({
    type: ADD_PROCESS,
    payload: { ...data }
})

export const removeProcess = ( res ) => ({
    type: REMOVE_PROCESS,
    payload: { res }
})

export const fetchingProcess = () => ({
    type: FETCHING_PROCESS,
})

export const fetchingFinishedProcess = () => ({
    type: FETCH_FINISHED_PROCESS,
})

export const fetchProcessID = (id) => async (dispatch) => {
    dispatch( fetchingProcess() );
    dispatch( cleanProcess() );

    await BuscarPorID(id)    
        .then( res => dispatch( addProcess(res.data) ) )
        .catch( err => console.log(err))

    dispatch( fetchingFinishedProcess() )
}

export const fetchRemoveProcess = (id) => async (dispatch) => {
    await Deletar(id)
        .then( res => dispatch( removeProcess(res) ) )
        .catch( err => console.log(err) )
}