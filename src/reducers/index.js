import { combineReducers } from 'redux'

import ui from './ui'
import processos from './search'
import details from './details'

const rootReducer = combineReducers({
    ui,
    processos,
    details
})

export default rootReducer