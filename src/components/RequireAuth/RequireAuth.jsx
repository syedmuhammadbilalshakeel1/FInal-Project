import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function RequireAuth() {
  const { token } = useSelector((state) => state.user.userInfo);
  const location = useLocation();
  return token ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />;
}

export default RequireAuth;
