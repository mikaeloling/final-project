import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('http://localhost:3000/login' + '/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
    });
    console.log(`Response status: ${res.status}, status text: ${res.statusText}`);

    if (!res.ok) {
      const data = await res.json();
      console.log('Response data:', data);
      setError(data.error);
      console.log('Error:', error);
      return;
    }
    const data = await res.json();
    if (data.error) {
      setError(data.error);
    } else {
      localStorage.setItem('token', data.token);
      console.log('Token:', localStorage.getItem('token'));
      window.location.href = '/admin';
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
  if (localStorage.getItem('token')) {
        navigate('/admin');
      }
  }, [navigate]);




  return (

    <>


  <NavBar />
    <div>
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input 
            type="text" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
    </>

  
  );

}






export default Login;