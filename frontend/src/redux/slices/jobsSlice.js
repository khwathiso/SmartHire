import {createSlice, crresteSlice } from '@reduxjs/toolkit';

const   initialState ={
 

  jobsList: [],

};

const jobsSlice  = createSlice ({

    name : 'jobs',
    initialState,

    reducers:{
        setJobs(state, action){
            state.jobList = action.payload;
        },
    },

});

export const { addJob } = jobsSlice.actions;
export default jobsSlice.reducer;