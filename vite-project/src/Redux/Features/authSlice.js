// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   user: null,
//   role: null,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     login: (state, action) => {
//       state.user = action.payload.user;
//       state.role = action.payload.role;
//     },
//     logout: (state) => {
//       state.user = null;
//       state.role = null;
//     },
//   },
// });

// export const { login, logout } = authSlice.actions;
// export default authSlice.reducer;



// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// import { supabase } from "../../Supabase/supabase";

// export const signupUser = createAsyncThunk(
//   "auth/signup",
//   async (data) => {
//     const { error } = await supabase.from("users").insert([data]);
//     if (error) throw error;
//     return data;
//   }
// );

// export const loginUser = createAsyncThunk(
//   "auth/login",
//   async ({ email, password }) => {
//     const { data, error } = await supabase
//       .from("users")
//       .select("*")
//       .eq("email", email)
//       .eq("password", password)
//       .single();

//     if (error) throw error;
//     return data;
//   }
// );

// const authSlice = createSlice({
//   name: "auth",
//   initialState: { user: null },
//   reducers: {
//     logout: (state) => {
//       state.user = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(loginUser.fulfilled, (state, action) => {
//       state.user = action.payload;
//     });
//   },
// });

// export const { logout } = authSlice.actions;
// export default authSlice.reducer;




import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "../../Supabase/supabase";


// ================== SIGNUP ==================
export const signupUser = createAsyncThunk(
  "auth/signup",
  async (data, { rejectWithValue }) => {
    const { error } = await supabase
      .from("users")
      .insert([data]);

    if (error) {
      return rejectWithValue(error.message);
    }

    return data;
  }
);


// ================== LOGIN ==================
export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ email, password, role }, { rejectWithValue }) => {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("email", email)
      .eq("password", password)
      .eq("role", role)
      .single();

    if (error) {
      return rejectWithValue("Invalid Credentials");
    }

    return data;
  }
);


// ================== SLICE ==================
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },

  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },

  extraReducers: (builder) => {
    builder

      // LOGIN
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
        state.error = action.payload;
      })

      // SIGNUP
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(signupUser.fulfilled, (state) => {
        state.loading = false;
      })

      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;