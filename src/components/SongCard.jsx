import React from 'react';

const SongCard = ({
  song,
  onSongAction,
  actionLabel,
  onEdit,
  onDelete,
  isInFavorites,
  isFavoritesPage
}) => {
  return (
    <div className="border border-gray-300 p-4 rounded-lg shadow-md">
      <img 
        src={song.image} 
        alt={song.title} 
        className="w-full h-32 object-cover rounded-lg mb-4" 
      />
      <h3 className="text-lg font-semibold">{song.title}</h3>
      <p className="text-gray-500">{song.artist}</p>
      <p className="text-sm text-gray-400">{song.genre}</p>

      <div className="flex items-center justify-between mt-4">
        <button
          onClick={() => {
            if (!isInFavorites) onSongAction(song);
          }}
          className={`p-2 rounded ${
            isInFavorites
              ? "bg-gray-400 text-white cursor-not-allowed"
              : "bg-rose-950 text-white hover:bg-rose-400"
          }`}
          disabled={isInFavorites}
        >
          {actionLabel}
        </button>

        {!isFavoritesPage && (
          <div className="flex space-x-4">
            <button
              onClick={onEdit}
              className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500"
            >
              Edit
            </button>
            <button
              onClick={onDelete}
              className="bg-rose-400 text-white px-3 py-1 rounded hover:bg-rose-500"
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SongCard;
