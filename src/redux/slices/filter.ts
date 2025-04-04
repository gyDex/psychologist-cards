import { createSlice } from "@reduxjs/toolkit";
import { ModalState } from "../store";

const filterSlice = createSlice({
    name: 'filter',

    initialState:{
        gender: '',
        requests: [],
        basic_approach: '',
        dates: [],
        times: [],
        price: 0,
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
        findByDates(state,action) {
            state.dates = action.payload
        },
        findByTimes(state,action) {
            state.times = action.payload
        }
    },
});


export const  { findByGender, findByBasicApproach,findByTimes, findByDates, findByPrice, findByRequests } = filterSlice.actions;

export const price = ( state: ModalState ) => state.filter.price;
export const gender = ( state: ModalState ) => state.filter.gender;
export const requests = ( state: ModalState ) => state.filter.requests;
export const times = ( state: ModalState ) => state.filter.times;
export const dates = ( state: ModalState ) => state.filter.dates;

export default filterSlice.reducer;