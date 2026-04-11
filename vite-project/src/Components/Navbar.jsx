import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-green-700">
        SMIT Connect
      </h1>

      {/* <div className="space-x-6 hidden md:flex">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div> */}

      <div className="space-x-6 hidden md:flex">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/student-login">Student Login</Link>
        <Link to="/student-signup">Student Signup</Link>
        <Link to="/admin-login">Admin Login</Link>
      </div>
    </nav>
  );
}