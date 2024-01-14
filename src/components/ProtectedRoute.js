import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import validateToken from "../utils/tokenValidation";

const ProtectedRoute = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      validateToken(token).then((isValid) => {
        if (isValid) {
          setIsAuthenticated(true);
          setIsLoading(false);
        } else {
          localStorage.removeItem("token");
          navigate("/login");
        }
      });
    }
  }, [navigate]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? children : null;
};

export default ProtectedRoute;
