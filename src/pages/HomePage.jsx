import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import SongCard from '../components/SongCard';

function HomePage({ addToFavorites, favorites }) {
  const [songs, setSongs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [newSong, setNewSong] = useState({ title: '', artist: '', genre: '', image: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [editSongId, setEditSongId] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/songs')
      .then((res) => res.json())
      .then((data) => setSongs(data))
      .catch((err) => console.error('Error fetching songs:', err));
  }, []);

  const handleAddOrUpdateSong = () => {
    if (newSong.title && newSong.artist && newSong.genre && newSong.image) {
      if (isEditing) {
        setSongs((prevSongs) =>prevSongs.map((song) =>song.id === editSongId ? { ...song, ...newSong } : song
       )
        );
        setIsEditing(false);
      } else {
        setSongs((prevSongs) => [...prevSongs,{ ...newSong, id: Date.now() },
        ]);
      }
      setNewSong({ title: '', artist: '', genre: '', image: '' });
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill in all fields!',
        icon: 'error',
        confirmButtonText: 'Retry',
      });
    }
  };

  const handleEditSong = (song) => {
    setIsEditing(true);
    setEditSongId(song.id);
    setNewSong({
      title: song.title,
      artist: song.artist,
      genre: song.genre,
      image: song.image,
    });
  };

  const handleDeleteSong = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This action cannot be undone!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        setSongs((prevSongs) => prevSongs.filter((song) => song.id !== id));
        Swal.fire('Deleted!', 'The song has been deleted.', 'success');
      }
    });
  };

  const filteredSongs = songs.filter((song) =>song.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4">All Songs</h2>

      
      <div className="flex items-center border border-gray-300 rounded mb-4 p-2">
        <input type="text" placeholder="Search by artist..."className="flex-grow p-2 outline-none" value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}/>
      </div>

     
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          {isEditing ? 'Edit Song' : 'Add New Song'}
        </h3>
        <input type="text" placeholder="Title" className="p-2 border border-gray-300 rounded w-full mb-2" value={newSong.title}
          onChange={(e) => setNewSong({ ...newSong, title: e.target.value })} />
        <input type="text" placeholder="Artist"className="p-2 border border-gray-300 rounded w-full mb-2" value={newSong.artist}
          onChange={(e) => setNewSong({ ...newSong, artist: e.target.value })} />
        <input type="text" placeholder="Genre"className="p-2 border border-gray-300 rounded w-full mb-2"value={newSong.genre}
          onChange={(e) => setNewSong({ ...newSong, genre: e.target.value })} />
        <input type="text" placeholder="Image URL" className="p-2 border border-gray-300 rounded w-full mb-2"value={newSong.image}
          onChange={(e) => setNewSong({ ...newSong, image: e.target.value })}/>
        <button
          onClick={handleAddOrUpdateSong} className="bg-rose-950 text-white px-4 py-2 rounded" >
          {isEditing ? 'Update Song' : 'Add Song'}
        </button>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredSongs.map((song) => (
          <SongCard key={song.id} song={song} onSongAction={addToFavorites} actionLabel={ favorites.find((fav) => fav.id === song.id)
                ? "In Favorites"
                : "Add to Favorites"
            }
            isInFavorites={favorites.find((fav) => fav.id === song.id)}
            onEdit={() => handleEditSong(song)}
            onDelete={() => handleDeleteSong(song.id)}
            isFavoritesPage={false}/>
        ))}
        {filteredSongs.length === 0 && (
          <p className="text-center text-red-500">No artists found.</p>
        )}
      </div>
    </div>
  );
}

export default HomePage;
