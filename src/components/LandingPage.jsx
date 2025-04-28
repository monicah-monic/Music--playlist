// import { useState, useEffect } from 'react';
// import SongCard from './SongCard';

// function LandingPage({ addToFavorites }) {
//   const [trendingSongs, setTrendingSongs] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:3000/songs')
//       .then((res) => res.json())
//       .then((data) => setTrendingSongs(data.slice(0, 4))) // Top 4 songs
//       .catch((err) => console.error('Error fetching trending songs:', err));
//   }, []);

//   return (
//     <div className="p-4">
//       <h2 className="text-3xl font-bold mb-4">Trending Songs</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//         {trendingSongs.map(song => (
//           <SongCard key={song.id} song={song} onSongAction={addToFavorites} actionLabel="Add to Favorites" />
//           // <SongCard key={song.id} song={song} onSongAction={()=>addToFavorites(song)} actionLabel={favorites.some((fav)=>fav.id===song.id)?InFavorites:"Add to Favorites" }/>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default LandingPage;




