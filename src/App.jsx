import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FavoritesPage from './components/FavoritesPage';
import SignInPage from './components/SignIn';
import SignUpPage from './components/SignUp';
import Navbar from './components/Navbar';
import Swal from 'sweetalert2';

function App() {
  const [favorites, setFavorites] = useState([]);
  const [isSignedUp, setIsSignedUp] = useState(false);

  useEffect(() => {
    const signedUp = localStorage.getItem('isSignedUp') === 'true';
    setIsSignedUp(signedUp);
  }, []);

  const addToFavorites = (song) => {
    const signedUp = localStorage.getItem('isSignedUp') === 'true';

    if (!signedUp) {
      Swal.fire('Please sign up first!');
      return;
    }

    if (!favorites.find((fav) => fav.id === song.id)) {
      setFavorites((prevFavorites) => [...prevFavorites, song]);
    }
  };

  const removeFromFavorites = (songId) => {
    setFavorites((prev) => prev.filter((fav) => fav.id !== songId));
  };

  return (
    <Router>
      <Navbar 
        favorites={favorites}
        isSignedUp={isSignedUp}
        setIsSignedUp={setIsSignedUp}
      />
      <main className="p-6">
        <Routes>
          <Route 
            path="/" 
            element={<HomePage 
              addToFavorites={addToFavorites} 
              favorites={favorites} 
            />} 
          />
          <Route 
            path="/favorites" 
            element={<FavoritesPage 
              favorites={favorites} 
              removeFromFavorites={removeFromFavorites} 
            />} 
          />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
