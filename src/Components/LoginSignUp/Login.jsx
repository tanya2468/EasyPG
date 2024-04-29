import React, { useState } from 'react';
import './LoginSignup.css';
//import user_icons from '../assetss/person.png';
import email_icons from '../assetss/email.png';
import password_icons from '../assetss/password.png';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const authenticatedUser = users.find(user => user.email === email && user.password === password);

    if (authenticatedUser) {
      alert('Login successful!');
      navigate("/home");
    } else {
      alert('Invalid email or password!');
    }
  };

  return (
    <div className='container'>
      <div className='header'>
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={email_icons} alt="" />
          <input type="email" placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input">
          <img src={password_icons} alt="" />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
      </div>
      <div className="forgot-password">
        Lost Password? <span>Click Here</span>
      </div>
      <div className="submit-container">
        <div className="submit" onClick={handleLogin}>
          Login
        </div>
        <div className="submit">
          <a href="/signup" className='submit'>Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Login;