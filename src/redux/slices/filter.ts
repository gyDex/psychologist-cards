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

        isVideo: false,
        
        data_name_psychologist: [],

        dates_psychologists: [],

        hour_dates: [],

        IsMental_Illness: false,
        IsMental_Illness2: false,
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
        },
        fillDataNamePsycho(state,action) {
            state.data_name_psychologist = action.payload;
        },
        fillDatesPsychologists(state,action) {
            state.dates_psychologists = action.payload;
        },

        fillHourAndDate(state,action) {
            state.hour_dates = action.payload;
        },

        findByVideo(state) {
            state.isVideo = !state.isVideo;
        },
        
        findByMental_Illness(state) {
            state.IsMental_Illness = !state.IsMental_Illness;
        },
        findByMental_Illness2(state) {
            state.IsMental_Illness2 = !state.IsMental_Illness2;
        },
    },
});


export const  { findByGender,findByMental_Illness,
    findByMental_Illness2,
    findByBasicApproach,findByTimes, findByDates, findByPrice, findByRequests,
    fillDataNamePsycho,
    fillDatesPsychologists,
    fillHourAndDate,
    findByVideo,
} = filterSlice.actions;

export const price = ( state: ModalState ) => state.filter.price;
export const gender = ( state: ModalState ) => state.filter.gender;
export const requests = ( state: ModalState ) => state.filter.requests;
export const times = ( state: ModalState ) => state.filter.times;
export const dates = ( state: ModalState ) => state.filter.dates;

export default filterSlice.reducer;