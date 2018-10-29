import { ADD_PROCESS, REMOVE_PROCESS, CLEAN_PROCESS, FETCHING_PROCESS, FETCH_FINISHED_PROCESS } from './actions'
import { Buscar } from '../../config/server'

export const cleanProcess = () => ({
    type: CLEAN_PROCESS,
    payload: []
})

export const addProcess = (data) => ({
    type: ADD_PROCESS,
    payload: { data }
})

export const removeProcess = (id) => ({
    type: REMOVE_PROCESS,
    payload: { id }
})

export const fetchingProcess = () => ({
    type: FETCHING_PROCESS,
})

export const fetchingFinishedProcess = () => ({
    type: FETCH_FINISHED_PROCESS,
})

export const fetchProcess = (search) => async (dispatch) => {
    dispatch(fetchingProcess());
    dispatch(cleanProcess());

    await Buscar(search)    
        .then( res => res.data.forEach( process => dispatch( addProcess(process) ) ) )
        .catch( err => console.log(err))

    dispatch( fetchingFinishedProcess() )
}