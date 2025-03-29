import { configureStore } from "@reduxjs/toolkit";
import modal from './slices/modal'

const store = configureStore({
    reducer: {
        modal: modal,
    }
})

export default store;

export type ModalState = ReturnType<typeof store.getState>