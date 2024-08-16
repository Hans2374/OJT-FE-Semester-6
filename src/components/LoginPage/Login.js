// LoginPage.js
import React from 'react';
import './Login.css';
import Icon from '@ant-design/icons/lib/components/Icon';

const LoginPage = () => {
  return (
    <div className='wrapper'>
      <form className='form-group custom-form'>
        <h1>Login</h1>
        <div className='input-box'>
          <input type='email' required  placeholder='Username or Email' />
          <Icon type="user" />
        </div>

        <div className='input-box'>
          <input type='password' required placeholder='Password'/>
          <Icon type="lock" className='icon'/>
        </div>
        
        <button type='submit' className='btn btn-success btn-md'>LOGIN</button>
      </form>
    </div>
  );
};

export default LoginPage;
