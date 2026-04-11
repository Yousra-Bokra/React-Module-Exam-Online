





import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../Redux/Features/authSlice";
// import Navbar from "../Components/Navbar";

export default function Login() {
  const dispatch = useDispatch();
  const [role, setRole] = useState("student");

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser({ ...form, role }));
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="flex justify-center items-center min-h-screen">
        <form
          onSubmit={handleLogin}
          className="bg-white p-8 shadow rounded w-96"
        >
          <h2 className="text-2xl font-bold mb-4">
            Login
          </h2>

          <div className="flex mb-4">
            <button
              type="button"
              onClick={() => setRole("student")}
              className={`flex-1 p-2 ${
                role === "student"
                  ? "bg-green-600 text-white"
                  : "bg-gray-200"
              }`}
            >
              Student
            </button>

            <button
              type="button"
              onClick={() => setRole("admin")}
              className={`flex-1 p-2 ${
                role === "admin"
                  ? "bg-green-600 text-white"
                  : "bg-gray-200"
              }`}
            >
              Admin
            </button>
          </div>

          <input
            className="border p-2 w-full mb-3"
            placeholder="Email"
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <input
            type="password"
            className="border p-2 w-full mb-3"
            placeholder="Password"
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />

          <button className="bg-green-600 text-white w-full py-2 rounded">
            Login
          </button>
        </form>
      </div>
    </>
  );
}