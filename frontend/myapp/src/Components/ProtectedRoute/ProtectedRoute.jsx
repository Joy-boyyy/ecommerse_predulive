import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ Component }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("token");
    if (token === undefined) {
      navigate("/user/login");
    }
  });
  return (
    <div>
      <Component />
    </div>
  );
};

export default ProtectedRoute;
