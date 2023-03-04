import {combineReducers, configureStore } from "@reduxjs/toolkit"
import langReducer from './langReducer'
import isFetching from "./isFetchingReducer"

const rootReducer = combineReducers({
    lang: langReducer,
    fetching: isFetching,
})
export const store = configureStore({
    reducer: rootReducer,
})