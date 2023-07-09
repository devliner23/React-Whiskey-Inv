import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
    name: "root", 
    initialState: {
        whiskey_name: "Whiskey Name",
        whiskey_brand: "Whiskey Brand",
        whiskey_location: "Whiskey Location",
        whiskey_price: "Whiskey Price"
    },
    reducers: {
        chooseName: (state, action) => {state.whiskey_name = action.payload},
        chooseBrand: (state, action) => {state.whiskey_brand = action.payload},
        chooseLocation: (state, action) => {state.whiskey_location = action.payload},
        choosePrice: (state, action) => {state.whiskey_price = action.payload}
    }
})

export const reducer = rootSlice.reducer; 
export const {chooseName, chooseBrand, chooseLocation, choosePrice} = rootSlice.actions