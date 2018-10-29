import createReducer from '../create-reducer'
import { ADD_PROCESS, CLEAN_PROCESS, OPEN_DETAILS, CLOSE_DETAILS, FETCHING_PROCESS, FETCH_FINISHED_PROCESS } from './actions'

const initialState = {
    isFetchingProcess: false,
    detailsOpened: false,
    item: {}
}

const processes = createReducer(initialState, {
    [CLEAN_PROCESS]: (state, action) => ({ 
        ...state,
        item: action.payload
    }),

    [ADD_PROCESS]: (state, action) => ({
        ...state,
        item: action.payload
    }),

    [OPEN_DETAILS]: state => ({
        ...state,
        detailsOpened: true
    }),

    [CLOSE_DETAILS]: state => ({
        ...state,
        detailsOpened: false
    }),

    [FETCHING_PROCESS]: (state) => ({
        ...state,
        isFetchingProcess: true
    }),

    [FETCH_FINISHED_PROCESS]: (state) => ({
        ...state,
        isFetchingProcess: false
    }),
})

export default processes