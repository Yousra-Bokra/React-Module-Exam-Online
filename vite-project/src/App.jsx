import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Courses from "./Pages/Courses";
import StudentLogin from "./Pages/StudentLogin";
import AdminLogin from "./Pages/AdminLogin";
import StudentSignup from './Pages/StudentSignup'
import AdminDashboard from "./Pages/AdminDashboard";
import ProtectedRoute from "./Components/ProtectedRoute";
// import StudentDashboard from "./Pages/StudentDashboard";
// import authSlice from "./Redux/Features/authSlice"
// import courseSlice from "./Redux/Features/courseSlice"

function App() {
  // const [count, setCount] = useState(0)

  return (


    // <div>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/student-login" element={<StudentLogin />} />
    //       <Route path="/student-signup" element={<StudentSignup />} />
    //       {/* <Route
    //         path="/student-dashboard"
    //         element={
    //           <ProtectedRoute role="student">
    //             <StudentDashboard />
    //           </ProtectedRoute>
    //         }
    //       /> */}
    //       <Route path="/admin-login" element={<AdminLogin />} />
    //       <Route
    //         path="/admin-dashboard"
    //         element={
    //           <ProtectedRoute role="admin">
    //             <AdminDashboard />
    //           </ProtectedRoute>
    //         }
    //       />
    //     </Routes>
    //   </BrowserRouter>
    // </div>

    <div>
        <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/student-signup" element={<StudentSignup />} />
        <Route path="/admin-login" element={<AdminLogin />} />

        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
