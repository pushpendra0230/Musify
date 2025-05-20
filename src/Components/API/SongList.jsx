// import React, { useEffect, useState, useRef, useContext } from 'react';
// import axios from 'axios';
// import { SearchContext } from '../UseContext/SearchContext';

// const SongList = () => {
//     const { search, setCurrentTrack } = useContext(SearchContext);
//     const [loading, setLoading] = useState(false);
//     const [songs, setSongs] = useState([]);
//     const [searchResults, setSearchResults] = useState([]);
//     const debounceTimeout = useRef(null);

//     useEffect(() => {
//         if (search && searchResults.length > 0) {
//             const filteredSongs = searchResults.filter(song =>
//                 song.name.toLowerCase().includes(search.toLowerCase())
//             );
//             setSongs(filteredSongs);
//         } else {
//             if (songs !== searchResults) {
//                 setSongs(searchResults);
//             }
//         }
//     }, [search, searchResults]);

//     // const fetchAPI = async () => {
//     //     setLoading(true);
//     //     try {
//     //         const options = {
//     //             method: 'GET',
//     //             url: 'https://saavn.dev/api/search/songs',
//     //             params: { query: search || 'English', limit: 40 },
//     //         };
//     //         const { data } = await axios.request(options);
//     //         setSearchResults(data.data.results);
//     //         setSongs(data.data.results);
//     //         setLoading(false);
//     //     } catch (error) {
//     //         console.error('Failed to fetch songs:', error);
//     //         setLoading(false);
//     //     }
//     // };

//     // useEffect(() => {
//     //     if (debounceTimeout.current) {
//     //         clearTimeout(debounceTimeout.current);
//     //     }
//     //     debounceTimeout.current = setTimeout(() => {
//     //         fetchAPI();
//     //     }, 300);
//     // }, [search]);

//     const fetchAPI = async () => {
//         setLoading(true);
//         try {
//             const options = {
//                 method: 'GET',
//                 url: 'https://cors-anywhere.herokuapp.com/https://saavn.dev/api/search/songs',
//                 params: { query: search || 'English', limit: 40 },
//             };
//             const { data } = await axios.request(options);
//             console.log('API response:', data); // ✅ Log response to verify structure
//             setSearchResults(data?.data?.results || []);
//             setSongs(data?.data?.results || []);
//             setLoading(false);
//         } catch (error) {
//             console.error('Failed to fetch songs:', error);
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         if (debounceTimeout.current) {
//             clearTimeout(debounceTimeout.current);
//         }
//         debounceTimeout.current = setTimeout(() => {
//             fetchAPI();
//         }, 300);
//     }, [search]);

//     useEffect(() => {
//         // ✅ Fetch songs on initial load
//         fetchAPI();
//     }, []);

//     const playSong = (song) => {
//         const highestQuality = song.downloadUrl?.find((file) => file.quality === '320kbps') || song.downloadUrl[0];
//         setCurrentTrack({
//             url: highestQuality.url,
//             title: song.name,
//             artist: song.primaryArtists,
//             image: song.image[2]?.url
//         });
//     };

//     // return (
//     //     <div className="p-6 bg-gradient-to-br from-[#f0f4f8] to-[#e5e5e5] min-h-screen text-black">
//     //         <h2 className="text-3xl font-semibold text-gray-800 mb-6">🎵 Music Player Spotify</h2>

//     //         {loading && (
//     //             <div className="flex justify-center items-center py-10">
//     //                 <div className="w-12 h-12 border-4 border-gray-300 border-t-transparent rounded-full animate-spin"></div>
//     //                 <p className="text-lg text-gray-500 ml-4">Loading songs...</p>
//     //             </div>
//     //         )}

//     //         <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//     //             {songs.map((song) => (
//     //                 <li
//     //                     key={song.id}
//     //                     className="flex items-center bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
//     //                     onClick={() => playSong(song)}
//     //                 >
//     //                     <img
//     //                         src={song.image[2]?.url}
//     //                         alt={song.name}
//     //                         className="w-16 h-16 object-cover"
//     //                     />
//     //                     <div className="flex flex-col justify-center px-4 py-2">
//     //                         <span className="text-lg font-medium text-gray-900">{song.name}</span>
//     //                         <span className="text-sm text-gray-500">{song.primaryArtists}</span>
//     //                     </div>
//     //                 </li>
//     //             ))}
//     //         </ul>
//     //     </div>
//     // );



//     return (
//         <div className="p-8 bg-gradient-to-br from-[#1e293b] to-[#334155] min-h-screen text-white">
//             <h2 className="text-4xl font-bold text-[#fbbf24] mb-8 tracking-wide">
//                 🎵 Music Player Musify
//             </h2>

//             {loading && (
//                 <div className="flex justify-center items-center py-10">
//                     <div className="w-12 h-12 border-4 border-[#fbbf24] border-t-transparent rounded-full animate-spin"></div>
//                     <p className="text-lg text-gray-300 ml-4">Loading songs...</p>
//                 </div>
//             )}

//             <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {songs.map((song) => (
//                     <li
//                         key={song.id}
//                         className="group flex items-center bg-[#1e293b] shadow-lg rounded-xl overflow-hidden hover:scale-105 hover:shadow-2xl transition-transform duration-300 ease-in-out cursor-pointer"
//                         onClick={() => playSong(song)}
//                     >
//                         <img
//                             src={song.image[2]?.url}
//                             alt={song.name}
//                             className="w-20 h-20 object-cover rounded-l-xl transition-opacity duration-300 group-hover:opacity-80"
//                         />
//                         <div className="flex flex-col justify-center px-5 py-3">
//                             <span className="text-xl font-semibold text-[#fbbf24] leading-tight">
//                                 {song.name}
//                             </span>
//                             <span className="text-sm text-gray-400">
//                                 {song.primaryArtists}
//                             </span>
//                         </div>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default SongList;






// responsive code 


import React, { useEffect, useState, useRef, useContext } from 'react';
import axios from 'axios';
import { SearchContext } from '../UseContext/SearchContext';

const SongList = () => {
    const { search, setCurrentTrack } = useContext(SearchContext);
    const [loading, setLoading] = useState(false);
    const [songs, setSongs] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const debounceTimeout = useRef(null);

    const fetchAPI = async () => {
        setLoading(true);
        try {
            const options = {
                method: 'GET',
                url: 'https://saavn.dev/api/search/songs',
                params: { query: search || 'English', limit: 40 },
            };
            const { data } = await axios.request(options);
            console.log('API response:', data);
            setSearchResults(data?.data?.results || []);
            setSongs(data?.data?.results || []);
        } catch (error) {
            console.error('Failed to fetch songs:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (debounceTimeout.current) {
            clearTimeout(debounceTimeout.current);
        }
        debounceTimeout.current = setTimeout(() => {
            fetchAPI();
        }, 300);
    }, [search]);

    useEffect(() => {
        fetchAPI();
    }, []);

    useEffect(() => {
        if (search) {
            const filteredSongs = searchResults.filter(song =>
                song.name.toLowerCase().includes(search.toLowerCase())
            );
            setSongs(filteredSongs);
        } else {
            setSongs(searchResults);
        }
    }, [search, searchResults]);

    const playSong = (song) => {
        if (song.downloadUrl) {
            const highestQuality = song.downloadUrl.find(file => file.quality === '320kbps') || song.downloadUrl[0];
            if (highestQuality) {
                setCurrentTrack({
                    url: highestQuality.url,
                    title: song.name,
                    artist: song.primaryArtists,
                    image: song.image[2]?.url || 'https://img.icons8.com/?size=96&id=UpZw1qeZM751&format=png'
                });
            }
        }
    };

    return (
        <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-gray-900 to-gray-700 min-h-screen text-white">
            {/* ✅ Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 mb-6 md:mb-8 tracking-wide">
                🎵 Music Player Musify
            </h2>

            {loading && (
                <div className="flex justify-center items-center py-10">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-md sm:text-lg text-gray-400 ml-4">Loading songs...</p>
                </div>
            )}

            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {songs.map(song => (
                    <li
                        key={song.id}
                        className="group flex items-center bg-gray-800 shadow-md rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
                        onClick={() => playSong(song)}
                    >
                        <img
                            src={song.image[2]?.url || 'https://img.icons8.com/?size=96&id=UpZw1qeZM751&format=png'}
                            alt={song.name}
                            className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-l-lg transition-opacity duration-300 group-hover:opacity-80"
                        />
                        {/* ✅ Song Info */}
                        <div className="flex flex-col justify-center px-4 py-2 sm:px-5 sm:py-3">
                            <span className="text-md sm:text-lg font-semibold text-yellow-400 leading-tight truncate">
                                {song.name}
                            </span>
                            <span className="text-xs sm:text-sm text-gray-400 truncate">
                                {song.primaryArtists}
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SongList;
