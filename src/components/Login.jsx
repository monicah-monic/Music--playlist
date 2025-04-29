import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = ({ setIsSignedUp }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLoginOrSignUp = () => {
    if (username && password) {
      localStorage.setItem('isSignedUp', 'true');
      setIsSignedUp(true);

      Swal.fire('Welcome!', 'You have successfully signed up or logged in.', 'success').then(() => {
        navigate('/'); 
      });
    } else {
      Swal.fire('Please enter both username and password.', '', 'error');
    }
  };

  return (
    <div className="p-4">
      <h2>Login</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}
        className="p-2 border border-gray-300 rounded mb-4"/>
      <br/>
      <input type="password" placeholder="Password" value={password}onChange={(e) => setPassword(e.target.value)}
        className="p-2 border border-gray-300 rounded mb-4" />
     
      <br/>
      <button onClick={handleLoginOrSignUp} className="bg-blue-500 text-white p-2 rounded" >
        LogIn
      </button>
    </div>
  );
};

export default Login;
