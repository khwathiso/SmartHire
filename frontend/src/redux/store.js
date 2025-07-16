import { configureStore } from '@reduxjs/toolkit';
import jobsReducer from './slices/jobsSlice';
import applicantsReducer from './slices/applicantsSlice';
import authReducer from './slices/authSlice'; 


const store = configureStore({

    reducer : {
        jobs: jobsReducer,
        applicants :applicantsReducer,
        auth: authReducer, 
        
    },

});
export default store;


