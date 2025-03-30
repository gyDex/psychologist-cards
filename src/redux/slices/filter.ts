import { createSlice } from "@reduxjs/toolkit";
import { ModalState } from "../store";

const filterSlice = createSlice({
    name: 'filter',

    initialState:{
        gender: '',
        requests: [],
        basic_approach: '',
        date: '',
        price: 1000,
    },
    
    reducers: {
        findByGender(state, action) {
            state.gender = action.payload;
        },
        findByRequests(state, action) {
            state.requests = action.payload;
        },
        findByBasicApproach(state, action) {
            state.basic_approach = action.payload;
        },
        findByPrice(state,action) {
            state.price = action.payload;
        },
        findByDate(state,action) {
            state.date = action.payload
        }
    },
});


export const  { findByGender, findByBasicApproach, findByDate, findByPrice, findByRequests } = filterSlice.actions;

export const price = ( state: ModalState ) => state.filter.price;

export default filterSlice.reducer;