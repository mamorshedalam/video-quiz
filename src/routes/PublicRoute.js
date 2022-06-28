import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext';


export default function PublicRoute({ children }) {
     const { currentUser } = useAuth();
     const location = useLocation();

     if (currentUser) {
          return <Navigate to="/" state={{ from: location }} replace />;
     }
     return children
}
