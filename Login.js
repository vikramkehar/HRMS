import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import './Login.css';

function Login({ setUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

    const handleLogin = () => {
        if (!username || !password) {
          setError('Both username and password are required.');
          return;
        }

        if (username.length < 5) {
            setError('Username must be at least 5 characters long.');
            return;
          }

    fetch('http://20.163.180.95:3000/api/v1/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error('Login failed');
        }
      })
      .then((user) => {
        setUser(user);
        navigate('/Employee'); 
      })
      .catch((error) => {
        console.error('Error:', error);
        setError('Login failed. Please check your credentials.');
      });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>

      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default Login;




