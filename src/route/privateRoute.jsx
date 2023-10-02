import { useContext } from 'react';
import { AppContext } from '../context/useContext';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const context = useContext(AppContext);
  const { user, loading } = context;

  if (loading) {
    return <span className="loading loading-bars loading-lg"></span>;
  }

  if (user) {
    return children;
  }

  return (
    <div>
      <Navigate to="/login"></Navigate>
    </div>
  );
};

export default PrivateRoute;
