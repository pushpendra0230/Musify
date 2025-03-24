// import React, { useEffect, useState, useRef, useContext } from 'react';
// import axios from 'axios';
// import { SearchContext } from '../UseContext/SearchContext';

// const App = () => {
//   const { search, setCurrentTrack } = useContext(SearchContext);
//   const [loading, setLoading] = useState(false);
//   const [songs, setSongs] = useState([]);
//   const debounceTimeout = useRef(null);

//   const fetchAPI = async () => {
//     setLoading(true);
//     try {
//       const { data } = await axios.get('https://saavn.dev/api/search/songs', {
//         params: { query: search || 'English', limit: 40 },
//       });
//       setSongs(data.data.results || []);
//     } catch (error) {
//       console.error('Failed to fetch songs:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (debounceTimeout.current) {
//       clearTimeout(debounceTimeout.current);
//     }
//     debounceTimeout.current = setTimeout(() => {
//       if (search) fetchAPI();
//     }, 300);

//     return () => clearTimeout(debounceTimeout.current);
//   }, [search]);

//   const playSong = (song) => {
//     const highestQuality = song.downloadUrl?.find((file) => file.quality === '320kbps') || song.downloadUrl[0];
//     setCurrentTrack({
//       url: highestQuality.url,
//       title: song.name,
//       artist: song.primaryArtists,
//       image: song.image[2]?.url
//     });
//   };

//   return (
//     <div className="p-6 bg-gray-900 text-white min-h-screen">
//       <h2 className="text-3xl font-bold mb-6">Music Player</h2>

//       {loading ? (
//         <div className="flex justify-center items-center py-10">
//           <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
//           <p className="ml-4 text-gray-400">Loading songs...</p>
//         </div>
//       ) : (
//         <ul className="space-y-4">
//           {songs.map((song) => (
//             <li
//               key={song.id}
//               className="flex items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition cursor-pointer"
//               onClick={() => playSong(song)}
//             >
//               <img
//                 src={song.image[2]?.url}
//                 alt={song.name}
//                 className="w-16 h-16 rounded-lg"
//               />
//               <div className="ml-4">
//                 <p className="text-lg font-medium">{song.name}</p>
//                 <p className="text-sm text-gray-400">{song.primaryArtists}</p>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };
// export default App;





// import React, { useEffect, useState, useRef, useContext } from 'react';
// import axios from 'axios';
// import { SearchContext } from '../UseContext/SearchContext';

// const App = () => {
//   const { search, setCurrentTrack } = useContext(SearchContext);
//   const [loading, setLoading] = useState(false);
//   const [songs, setSongs] = useState([]);
//   const debounceTimeout = useRef(null);

//   const fetchAPI = async () => {
//     setLoading(true);
//     try {
//       const searchValue = search?.trim() || 'English';
//       const { data } = await axios.get('https://cors-anywhere.herokuapp.com/https://saavn.dev/api/search/songs', {
//         params: { query: searchValue, limit: 40 },
//       });
//       setSongs(data?.data?.results || []);
//     } catch (error) {
//       console.error('Failed to fetch songs:', error);
//       if (error.response) {
//         console.log('Error data:', error.response.data);
//         console.log('Error status:', error.response.status);
//       } else if (error.request) {
//         console.log('Error request:', error.request);
//       } else {
//         console.log('Error message:', error.message);
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (debounceTimeout.current) {
//       clearTimeout(debounceTimeout.current);
//     }
//     debounceTimeout.current = setTimeout(() => {
//       if (search) fetchAPI();
//     }, 300);

//     return () => clearTimeout(debounceTimeout.current);
//   }, [search]);

//   const playSong = (song) => {
//     const highestQuality = song.downloadUrl?.find((file) => file.quality === '320kbps') || song.downloadUrl?.[0];
//     if (highestQuality) {
//       setCurrentTrack({
//         url: highestQuality.url,
//         title: song.name,
//         artist: song.primaryArtists,
//         image: song.image?.[2]?.url
//       });
//     }
//   };

//   return (
//     <div className="p-6 bg-gray-900 text-white min-h-screen">
//       <h2 className="text-3xl font-bold mb-6">Music Player</h2>

//       {loading ? (
//         <div className="flex justify-center items-center py-10">
//           <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
//           <p className="ml-4 text-gray-400">Loading songs...</p>
//         </div>
//       ) : (
//         <ul className="space-y-4">
//           {songs.map((song) => (
//             <li
//               key={song.id}
//               className="flex items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition cursor-pointer"
//               onClick={() => playSong(song)}
//             >
//               <img
//                 src={song.image?.[2]?.url}
//                 alt={song.name}
//                 className="w-16 h-16 rounded-lg"
//               />
//               <div className="ml-4">
//                 <p className="text-lg font-medium">{song.name}</p>
//                 <p className="text-sm text-gray-400">{song.primaryArtists}</p>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default App;




// responsive code 

import React, { useEffect, useState, useRef, useContext } from 'react';
import axios from 'axios';
import { SearchContext } from '../UseContext/SearchContext';

const App = () => {
  const { search, setCurrentTrack } = useContext(SearchContext);
  const [loading, setLoading] = useState(false);
  const [songs, setSongs] = useState([]);
  const debounceTimeout = useRef(null);

  // ✅ Fetch Songs from API
  const fetchAPI = async () => {
    setLoading(true);
    try {
      const searchValue = search?.trim() || 'English';
      const { data } = await axios.get('https://cors-anywhere.herokuapp.com/https://saavn.dev/api/search/songs', {
        params: { query: searchValue, limit: 40 },
      });
      setSongs(data?.data?.results || []);
    } catch (error) {
      console.error('Failed to fetch songs:', error);
      if (error.response) {
        console.log('Error data:', error.response.data);
        console.log('Error status:', error.response.status);
      } else if (error.request) {
        console.log('Error request:', error.request);
      } else {
        console.log('Error message:', error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  // ✅ Debounce Search Input
  useEffect(() => {
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }
    debounceTimeout.current = setTimeout(() => {
      if (search) fetchAPI();
    }, 300);

    return () => clearTimeout(debounceTimeout.current);
  }, [search]);

  // ✅ Play Song
  const playSong = (song) => {
    const highestQuality = song.downloadUrl?.find((file) => file.quality === '320kbps') || song.downloadUrl?.[0];
    if (highestQuality) {
      setCurrentTrack({
        url: highestQuality.url,
        title: song.name,
        artist: song.primaryArtists,
        image: song.image?.[2]?.url || 'https://img.icons8.com/?size=96&id=UpZw1qeZM751&format=png',
      });
    }
  };

  return (
    <div className="p-4 sm:p-6 bg-gray-900 text-white min-h-screen">
      {/* ✅ Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 mb-6">
        🎧 Music Player
      </h2>

      {/* ✅ Loading Indicator */}
      {loading ? (
        <div className="flex justify-center items-center py-10">
          <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
          <p className="ml-4 text-gray-400 text-lg">Loading songs...</p>
        </div>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {songs.map((song) => (
            <li
              key={song.id}
              className="group flex items-center p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-transform transform hover:scale-105 cursor-pointer"
              onClick={() => playSong(song)}
            >
              {/* ✅ Song Image */}
              <img
                src={song.image?.[2]?.url || 'https://img.icons8.com/?size=96&id=UpZw1qeZM751&format=png'}
                alt={song.name}
                className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg transition-opacity duration-300 group-hover:opacity-80"
              />

              {/* ✅ Song Info */}
              <div className="ml-4">
                <p className="text-sm sm:text-base font-semibold text-yellow-400 truncate">
                  {song.name || 'Unknown Title'}
                </p>
                <p className="text-xs sm:text-sm text-gray-400 truncate">
                  {song.primaryArtists || 'Unknown Artist'}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;