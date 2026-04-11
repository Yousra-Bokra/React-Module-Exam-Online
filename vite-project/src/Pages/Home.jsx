// import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="min-h-screen bg-gradient-to-r from-green-900 to-yellow-700 text-white flex flex-col justify-center items-center text-center p-6">
        <h1 className="text-5xl font-bold mb-6">
          Shape Your Future With Technology
        </h1>

        <div className="space-x-4">
          <Link
            to="/signup"
            className="bg-green-600 px-6 py-3 rounded"
          >
            Get Started
          </Link>

          <Link
            to="/courses"
            className="border px-6 py-3 rounded"
          >
            View Courses
          </Link>
        </div>
      </div>
    </>
  );
}