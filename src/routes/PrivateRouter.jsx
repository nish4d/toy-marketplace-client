import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from 'sweetalert2'
import Loading from "../components/shared/Loading";

const PrivateRouter = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <Loading></Loading>
  }
  if (user) {
    return children;
  }
  else{
    Swal.fire({
      title: 'You have to log in first to view details !!!',
      icon: 'error',
      confirmButtonText: 'Close'
    })
    return <Navigate state={{ from: location }} to="/login"></Navigate>;
  }
};

export default PrivateRouter;
