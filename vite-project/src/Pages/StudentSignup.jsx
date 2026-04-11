



import { useState } from "react";
import { useDispatch } from "react-redux";
import { signupUser } from "../Redux/Features/authSlice";
// import Navbar from "../Components/Navbar";

export default function Signup() {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signupUser(form));
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="flex justify-center items-center min-h-screen">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 shadow rounded w-96"
        >
          <h2 className="text-2xl mb-4 font-bold">
            Create Account
          </h2>

          <input
            className="border p-2 w-full mb-3"
            placeholder="Name"
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />
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
            Signup
          </button>
        </form>
      </div>
    </>
  );
}