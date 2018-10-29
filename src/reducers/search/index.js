import createReducer from '../create-reducer'
import { ADD_PROCESS, REMOVE_PROCESS, CLEAN_PROCESS, FETCHING_PROCESS, FETCH_FINISHED_PROCESS } from './actions'

const initialState = {
    isFetchingProcess: false,
    items: []    
}

const processes = createReducer(initialState, {
    [CLEAN_PROCESS]: (state, action) => ({ 
        ...state,
        items: action.payload  
    }),

    [ADD_PROCESS]: (state, action) => ({
        ...state,
        items: [
            ...state.items.concat( action.payload.data )
        ]
    }),

    [REMOVE_PROCESS]: (state, action) => ({
        ...state,
        items: [ ...state.items.filter((item) => item.id !== action.payload.id) ]
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