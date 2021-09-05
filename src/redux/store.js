import {combineReducers, createStore} from 'redux'
import { formReducer } from './formReducer'
import { ModalReducer } from './ModalReducer'

const RootReducer = combineReducers({
    form: formReducer,
    modals: ModalReducer
})

export const store = createStore(RootReducer)