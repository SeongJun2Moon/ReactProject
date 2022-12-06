// import {configureStore,
//         combineReducers,
//         getDefaultMiddleware} from "@reduxjs/toolkit"
// import logger from 'redux-logger'

// const rootReducer = combineReducers({})

// export const store = configureStore({
//     reducer: rootReducer,
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware()
//                                             .concat(logger)
// })

import { createStore } from 'redux'
import todoReducer from '../todos/reducers/todo.reducer'
export const store = createStore(todoReducer)