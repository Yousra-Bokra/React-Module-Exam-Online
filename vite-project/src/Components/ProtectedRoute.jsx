import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, role }) {
  const { user, role: userRole } = useSelector((state) => state.auth);

  if (!user || userRole !== role) {
    return <Navigate to="/" />;
  }

  return children;
}