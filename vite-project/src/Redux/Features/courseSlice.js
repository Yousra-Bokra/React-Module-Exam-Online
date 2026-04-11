// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// import { supabase } from "../../Supabase/supabase";

// export const fetchCourses = createAsyncThunk(
//   "course/fetch",
//   async () => {
//     const { data } = await supabase.from("courses").select("*");
//     return data;
//   }
// );

// const courseSlice = createSlice({
//   name: "course",
//   initialState: { courses: [] },
//   extraReducers: (builder) => {
//     builder.addCase(fetchCourses.fulfilled, (state, action) => {
//       state.courses = action.payload;
//     });
//   },
// });

// export default courseSlice.reducer;












// export const fetchCourses = createAsyncThunk(
//   "course/fetch",
//   async (_, { rejectWithValue }) => {
//     const { data, error } = await supabase
//       .from("courses")
//       .select("*");

//     if (error) {
//       return rejectWithValue(error.message);
//     }

//     return data;
//   }
// );





import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "../../Supabase/supabase";

export const fetchCourses = createAsyncThunk(
  "course/fetch",
  async (_, { rejectWithValue }) => {
    const { data, error } = await supabase
      .from("courses")
      .select("*");

    if (error) {
      return rejectWithValue(error.message);
    }

    return data;
  }
);

const courseSlice = createSlice({
  name: "course",
  initialState: {
    courses: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default courseSlice.reducer;   // ✅ یہ لائن بہت ضروری ہے