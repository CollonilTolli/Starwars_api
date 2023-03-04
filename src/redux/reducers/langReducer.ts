import { createAction, createReducer } from "@reduxjs/toolkit"

const initialState = {
    language: 'en'
}

export const languageActive:any = createAction("LANG")

export default createReducer( initialState, {
    [languageActive]: function (state: any) {
        state.language = state.language === "wookiee" ? "en" : "wookiee"
    }
})