import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../Redux/Features/authSlice";

export default function AdminLogin() {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(form));
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow p-6 rounded w-80"
      >
        <h2 className="text-xl font-bold mb-4 text-center">
          Admin Login
        </h2>

        <input
          className="border w-full p-2 mb-3 rounded"
          placeholder="Email"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          type="password"
          className="border w-full p-2 mb-3 rounded"
          placeholder="Password"
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white w-full py-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
}