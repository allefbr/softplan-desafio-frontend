import { 
    OPEN_DETAILS, 
    CLOSE_DETAILS,
    OPEN_MODAL, 
    CLOSE_MODAL ,
    CLOSE_MESSAGE_TIMER,
    OPEN_MESSAGE_ERROR,
    CLOSE_MESSAGE_ERROR,
    OPEN_MESSAGE_SUCCESS,
    CLOSE_MESSAGE_SUCCESS
} from './actions'

export const openDetails = () => ({
    type: OPEN_DETAILS
})

export const closeDetails = () => ({
    type: CLOSE_DETAILS
})

export const openModal = () => ({
    type: OPEN_MODAL
})

export const closeModal = () => ({
    type: CLOSE_MODAL
})

export const openMessageError = () => ({
    type: OPEN_MESSAGE_ERROR
})

export const closeMessageError = () => ({
    type: CLOSE_MESSAGE_ERROR
})

export const openMessageSuccess = () => ({
    type: OPEN_MESSAGE_SUCCESS
})

export const closeMessagesuccess = () => ({
    type: CLOSE_MESSAGE_SUCCESS
})

export const closeMessages = ( time ) => ({
    type: CLOSE_MESSAGE_TIMER,
    payload: time
})