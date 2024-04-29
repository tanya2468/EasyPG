import React, { useState } from 'react';
import './LoginSignup.css';
import user_icons from '../assetss/person.png';
import email_icons from '../assetss/email.png';
import password_icons from '../assetss/password.png';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    const existingUser = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = existingUser.some(user => user.email === email);

    if (userExists) {
      alert('User with this email already exists!');
    } else {
      const newUser = { username, email, password };
      existingUser.push(newUser);
      localStorage.setItem('users', JSON.stringify(existingUser));
      alert('Sign up successful!');
      window.location.href = '/login';
    }
  };

  return (
    <div className='container'>
      <div className='header'>
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user_icons} alt="" />
          <input type="text" placeholder='Name' value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="input">
          <img src={email_icons} alt="" />
          <input type="email" placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input">
          <img src={password_icons} alt="" />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
      </div>
      <div className="submit-container">
        <div className="submit" onClick={handleSignup}>
          Sign Up
        </div>
        <div className="submit">
          <a href="/login" className='submit'>Login</a>
        </div>
      </div>
    </div>
  );
};

export default Signup;