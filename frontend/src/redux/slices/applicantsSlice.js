import { createSlice } from '@reduxjs/toolkit';

const initialState = {
      applicantsList: [],
};

const applicantsSlice =  createSlice ({

    name : 'applicants',
    initialState,
    reducers : {
            setApplicants(state, action) {
                state.applicantsList = action.payload;
            },

    },
});

export const { addApplicant } = applicantsSlice.actions;
export default applicantsSlice.reducer;

