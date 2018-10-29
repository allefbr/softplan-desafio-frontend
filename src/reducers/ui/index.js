import createReducer from '../create-reducer'
import { 
    OPEN_DETAILS, 
    CLOSE_DETAILS,
    OPEN_MODAL, 
    CLOSE_MODAL ,
    OPEN_MESSAGE_SUCCESS,
    CLOSE_MESSAGE_SUCCESS,
    OPEN_MESSAGE_ERROR,
    CLOSE_MESSAGE_ERROR,
    CLOSE_MESSAGE_TIMER
} from './actions'

const initialState = {
    isDetailsOpened: false,
    isModalOpened: false,
    isMessage: {
        error: false,
        sucess: false
    }
}

const ui = createReducer(initialState, {
    [OPEN_DETAILS]: (state) => ({
        ...state,
        isDetailsOpened: true
    }),

    [CLOSE_DETAILS]: (state) => ({
        ...state,
        isDetailsOpened: false
    }),

    [OPEN_MODAL]: (state) => ({
        ...state,
        isModalOpened: true
    }),

    [CLOSE_MODAL]: (state) => ({
        ...state,
        isModalOpened: false
    }),

    [OPEN_MESSAGE_SUCCESS]: (state, action) => ({
        ...state,
        isMessage: {
            ...state.isMessage,
            sucess: true
        }
    }),

    [CLOSE_MESSAGE_SUCCESS]: (state, action) => ({
        ...state,
        isMessage: {
            ...state.isMessage,
            sucess: false
        }
    }),

    [OPEN_MESSAGE_ERROR]: (state, action) => ({
        ...state,
        isMessage: {
            ...state.isMessage,
            error: true
        }
    }),

    [CLOSE_MESSAGE_ERROR]: (state, action) => ({
        ...state,
        isMessage: {
            ...state.isMessage,
            error: false
        }
    }),

    [CLOSE_MESSAGE_TIMER]: (state) => ({
        ...state,
        isMessage: {
            sucess: false,
            error: false
        }
    }),
})

export default ui