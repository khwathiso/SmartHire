import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../api/axios'; // Axios instance with baseURL

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await axios.post('users/login/', { email, password });
      return response.data; // e.g. { message: "...", email: "..." }
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || { error: 'Login failed' }
      );
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    logoutUser(state) {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.error || 'Login failed';
      });
  },
});

export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;
