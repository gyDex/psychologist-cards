import { createSlice } from "@reduxjs/toolkit";

const applicationFormDataSlice = createSlice({
    name: 'applicationForm',

    initialState:{
        username: '',
        age: '',
        gender_user: '',
        preferences: [],
        gender_psychologist: '',

    },
    
    reducers: {
        fill_username(state, action) {
            state.username = action.payload;
        },
        fill_age(state, action) {
            state.age = action.payload;
        },
        fill_gender(state, action) {
            state.gender_user = action.payload;
        },
        fill_preferences(state, action) {
            state.preferences = action.payload;
        },
    },
});


export const  { fill_username, fill_age, fill_gender, fill_preferences  } = applicationFormDataSlice.actions;

// export const application_stage = ( state: ModalState ) => state.applicationFormData.username;

export default applicationFormDataSlice.reducer;