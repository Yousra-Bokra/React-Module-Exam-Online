import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { registerStudent } from "./studentService";

export const signupStudent = createAsyncThunk(
  "student/signup",
  async (data, thunkAPI) => {
    try {
      return await registerStudent(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const studentSlice = createSlice({
  name: "student",
  initialState: {
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupStudent.pending, (state) => {
        state.loading = true;
      })
      .addCase(signupStudent.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(signupStudent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default studentSlice.reducer;