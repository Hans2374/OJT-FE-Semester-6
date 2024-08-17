import React from 'react';

import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';

import { useNavigate } from 'react-router-dom';

import Login from '../../components/LoginPage/Login';

function LoginPage() {

  const navigate = useNavigate()
  const user = useSelector(selectUser)

  return (
<div>
      {/* Sử dụng Link để điều hướng */}
      {user ? (
        navigate("/home")
      ) : (
        <Login/>
      )}
    </div>
  );
}

export default LoginPage;
