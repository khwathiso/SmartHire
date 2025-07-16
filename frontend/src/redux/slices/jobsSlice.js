// src/redux/slices/jobsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../api/axios'; // make sure this exists

export const fetchJobs = createAsyncThunk(
  'jobs/fetchJobs',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/jobs/');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Failed to fetch jobs');
    }
  }
);

const jobsSlice = createSlice({
  name: 'jobs',
  initialState: {
    jobsList: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.jobsList = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default jobsSlice.reducer;
