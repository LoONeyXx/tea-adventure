import { configureStore } from '@reduxjs/toolkit';
import cardListReducer from './mainReducer';

const store = configureStore({
    reducer: {
        teaList: cardListReducer,
    },
});


export default store
export type Root
