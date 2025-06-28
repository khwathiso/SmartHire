import { configureStore } from '@reduxjs/toolkit';
import jobsReducer from './slices/jobsSlice';
import applicantsReducer from './slices/applicantsSlice';

export const store = configureStore({

    reducer : {
        jobs: jobsReducer,
        applicants :applicantsReducer,
    },

});
export default store;


