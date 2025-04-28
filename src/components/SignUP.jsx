import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = () => {
    // Simulating a sign-up action (you should actually store this info on the server)
    if (username && password) {
      localStorage.setItem('isSignedUp', true);
      Swal.fire('Sign Up Successful!', '', 'success').then(() => {
        navigate('/'); // Redirect to home page
      });
    } else {
      Swal.fire('Please enter both username and password', '', 'error');
    }
  };

  return (
    <div className="p-4">
      <h2>Sign Up</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="p-2 border border-gray-300 rounded mb-4"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="p-2 border border-gray-300 rounded mb-4"
      />
      <button onClick={handleSignUp} className="bg-blue-500 text-white p-2 rounded">
        Sign Up
      </button>
    </div>
  );
};

export default SignUpPage;