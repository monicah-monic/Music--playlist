import React from 'react';
import SongCard from './SongCard';

const SongList = ({ songs, onSongAction, actionLabel, isFavoritesPage }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {songs.map((song) => (
        <SongCard key={song.id}song={song} onSongAction={onSongAction} actionLabel={actionLabel} isFavoritesPage={isFavoritesPage} />
      ))}
    </div>
  );
};

export default SongList;
