import { useDispatch } from "react-redux";
import { logout } from "../Redux/Features/authSlice";

export default function AdminDashboard() {
  const dispatch = useDispatch();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <button
        onClick={() => dispatch(logout())}
        className="bg-red-600 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}