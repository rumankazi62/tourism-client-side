import React from 'react';
import useAuth from '../../../hooks/useAuth';

const UserLogin = () => {
  const { signInUsingGoogle } = useAuth();
  return (
    <div>
      <h3>Please login now</h3>
            <button onClick={signInUsingGoogle} className="btn btn-success">Google Login</button>
    </div>
  );
};

export default UserLogin;