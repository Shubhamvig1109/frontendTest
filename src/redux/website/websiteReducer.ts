import { createSlice } from "@reduxjs/toolkit"
import { InitialState } from "../initialState"

export const websiteSlice = createSlice({
    name: 'website',
    initialState: InitialState.website,
    reducers: {
        setLoading: (state) => {
            state.isLoading = true
        },
        disableloading: (state) => {
            state.isLoading = false
        }
    }
})

export const counterActions = websiteSlice.actions

export default websiteSlice.reducer