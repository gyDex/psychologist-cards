import { createSlice } from "@reduxjs/toolkit";
import { ModalState } from "../store";

const clickSlice = createSlice({
    name: 'modal',

    initialState:{
        isOpenType: 'Time',
        isOpen: false,
    },
    
    reducers: {
        open(state) {
            state.isOpen = true;
        },
        close(state) {
            state.isOpen = false;
        },
        openNext(state, action) {
            state.isOpenType = action.payload;
        }
    },
});


export const  { open, close, openNext } = clickSlice.actions;

export const isOpenType = ( state: ModalState ) => state.modal.isOpenType;
export const isOpen = ( state:ModalState ) => state.modal.isOpen;

export default clickSlice.reducer;