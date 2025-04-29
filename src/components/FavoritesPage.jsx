import React from 'react';
import SongList from './SongList';

function FavoritesPage({ favorites, removeFromFavorites }) {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Your Favorite Songs</h2>

      {favorites.length === 0 ? (
        <p className="text-gray-500">You haven't added any favorites yet.</p>): (
        <SongList songs={favorites} onSongAction={(song) => removeFromFavorites(song.id)}actionLabel="Remove" isFavoritesPage={true}/>
      )}
    </div>
  );
}

export default FavoritesPage;
