import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Navbar({ favorites, isSignedUp, setIsSignedUp }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isSignedUp');
    setIsSignedUp(false);

    Swal.fire('Logged Out', 'You have successfully logged out.', 'success').then(() => {
      navigate('/login');
    });
  };

  return (
    <nav className="bg-rose-950 text-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Music App</h1>
        <div className="space-x-4 flex items-center">
          <Link to="/favorites" className="hover:text-rose-300">Favorites ({favorites.length})</Link>
          <Link to="/" className="hover:text-gray-400"> Home </Link>
          {isSignedUp ? (
            <button onClick={handleLogout} className="bg-red-500 px-3 py-1 rounded hover:bg-red-600">
              Logout
            </button>
          ) : (
            <Link to="/login" className="hover:text-gray-400">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

