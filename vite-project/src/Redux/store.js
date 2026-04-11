// import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "../Redux/Features/authSlice";
// import studentReducer from "../Features/student/studentSlice";
// import courseReducer from "../features/course/courseSlice";
// import leaveReducer from "../features/leave/leaveSlice";

// export const store = configureStore({
//   reducer: {
//     auth: authReducer,
//     student: studentReducer,
//     course: courseReducer,
//     leave: leaveReducer,
//   },
// });



// import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "../Redux/Features/authSlice";

// export const store = configureStore({
//   reducer: {
//     auth: authReducer,
//   },
// });









// import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "../Redux/Features/authSlice";
// import courseReducer from "../Redux/Features/courseSlice";

// export const store = configureStore({
//   reducer: {
//     auth: authReducer,
//     course: courseReducer,
//   },
// });








import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Features/authSlice";
import courseReducer from "./Features/courseSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    course: courseReducer,
  },
});

export default store;   // ✅ یہ بھی default export ہونا چاہیے