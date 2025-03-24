// import React, { useEffect, useState, useRef, useContext } from 'react';
// import axios from 'axios';
// import { SearchContext } from '../Components/UseContext/SearchContext';
// import SideBar from '../Components/FixedHomeComponents/SideBar';
// import NavBar from '../Components/FixedHomeComponents/NavBar';

// const ExplorePage = () => {
//     const { search, setCurrentTrack } = useContext(SearchContext);
//     const [loading, setLoading] = useState(false);
//     const [songs, setSongs] = useState([]);
//     const debounceTimeout = useRef(null);

//     const fetchAPI = async () => {
//         setLoading(true);
//         try {
//             const { data } = await axios.get('https://saavn.dev/api/search/songs', {
//                 params: { query: search || 'English', limit: 40 },
//             });
//             setSongs(data.data.results || []);
//         } catch (error) {
//             console.error('Failed to fetch songs:', error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
//         debounceTimeout.current = setTimeout(() => {
//             if (search) fetchAPI();
//         }, 300);

//         return () => clearTimeout(debounceTimeout.current);
//     }, [search]);

//     const playSong = (song) => {
//         const highestQuality = song.downloadUrl?.find((file) => file.quality === '320kbps') || song.downloadUrl[0];
//         setCurrentTrack({
//             url: highestQuality.url,
//             title: song.name,
//             artist: song.primaryArtists,
//             image: song.image[2]?.url,
//         });
//     };

//     return (
//         <div className="flex">
//             {/* Sidebar */}
//             <SideBar />

//             {/* Explore Content */}
//             <div className="flex-1 bg-gray-900 min-h-screen text-white">
//                 {/* Navbar */}
//                 <NavBar />

//                 {/* Content */}
//                 <div className="p-6">
//                     <h2 className="text-3xl font-bold mb-6 flex items-center">
//                         <span className="mr-2 text-[#fbbf24]">🎵</span>
//                         Explore Music
//                     </h2>

//                     {loading ? (
//                         <div className="flex justify-center items-center py-10">
//                             <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
//                             <p className="ml-4 text-gray-400">Loading songs...</p>
//                         </div>
//                     ) : (
//                         <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//                             {songs.map((song) => (
//                                 <li
//                                     key={song.id}
//                                     className="flex items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition cursor-pointer"
//                                     onClick={() => playSong(song)}
//                                 >
//                                     <img
//                                         src={song.image[2]?.url}
//                                         alt={song.name}
//                                         className="w-16 h-16 rounded-lg"
//                                     />
//                                     <div className="ml-4">
//                                         <p className="text-lg font-medium">{song.name}</p>
//                                         <p className="text-sm text-gray-400">{song.primaryArtists}</p>
//                                     </div>
//                                 </li>
//                             ))}
//                         </ul>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ExplorePage;



// import React, { useEffect, useState, useRef, useContext } from 'react';
// import axios from 'axios';
// import { SearchContext } from '../Components/UseContext/SearchContext';
// import SideBar from '../Components/FixedHomeComponents/SideBar';
// import NavBar from '../Components/FixedHomeComponents/NavBar';
// import MusicPlayer from '../Components/FixedHomeComponents/MusicPlayer';

// const ExplorePage = () => {
//     const { search, setSearch, setCurrentTrack } = useContext(SearchContext);
//     const [loading, setLoading] = useState(false);
//     const [songs, setSongs] = useState([]);
//     const [filteredSongs, setFilteredSongs] = useState([]);
//     const [currentPlaying, setCurrentPlaying] = useState(null);
//     const debounceTimeout = useRef(null);

//     // Fetch songs from API
//     const fetchAPI = async () => {
//         if (!search) return;

//         setLoading(true);
//         try {
//             const { data } = await axios.get('https://saavn.dev/api/search/songs', {
//                 params: { query: search || 'English', limit: 40 },
//             });

//             if (data?.data?.results) {
//                 setSongs(data.data.results);
//                 setFilteredSongs(data.data.results);
//             } else {
//                 setSongs([]);
//                 setFilteredSongs([]);
//             }
//         } catch (error) {
//             console.error('Failed to fetch songs:', error);
//             setSongs([]);
//             setFilteredSongs([]);
//         } finally {
//             setLoading(false);
//         }
//     };

//     // Debounce search to avoid excessive API calls
//     useEffect(() => {
//         if (debounceTimeout.current) clearTimeout(debounceTimeout.current);

//         debounceTimeout.current = setTimeout(() => {
//             if (search && search.length >= 2) {
//                 fetchAPI();
//             } else {
//                 setFilteredSongs([]);
//             }
//         }, 500);

//         return () => clearTimeout(debounceTimeout.current);
//     }, [search]);

//     // Filter songs dynamically
//     useEffect(() => {
//         if (search) {
//             const filtered = songs.filter(song =>
//                 song.name?.toLowerCase().includes(search.toLowerCase()) ||
//                 song.primaryArtists?.toLowerCase().includes(search.toLowerCase())
//             );
//             setFilteredSongs(filtered);
//         } else {
//             setFilteredSongs(songs);
//         }
//     }, [search, songs]);

//     // Handle play song
//     const playSong = (song) => {
//         const highestQuality = song.downloadUrl?.find(file => file.quality === '320kbps') || song.downloadUrl[0];
//         if (highestQuality) {
//             setCurrentTrack({
//                 url: highestQuality.url,
//                 title: song.name || 'Unknown Title',
//                 artist: song.primaryArtists || 'Unknown Artist',
//                 image: song.image?.[2]?.url || '/default-song.png', // Fallback image
//             });
//             setCurrentPlaying(song.id);
//         }
//     };

//     return (
//         <div className="flex">
//             {/* Sidebar */}
//             <SideBar />

//             {/* Explore Content */}
//             <div className="flex-1 bg-gray-900 min-h-screen text-white">
//                 {/* Navbar */}
//                 <NavBar />

//                 {/* Content */}
//                 <div className="p-6 overflow-y-auto h-[calc(100vh-6rem)]">
//                     {/* Header */}
//                     <div className="flex items-center justify-between mb-6">
//                         <h2 className="text-3xl font-bold flex items-center">
//                             <span className="mr-2 text-[#fbbf24]">🎵</span>
//                             Explore Music
//                         </h2>
//                     </div>

//                     {/* Search Bar */}
//                     <input
//                         type="text"
//                         value={search}
//                         onChange={(e) => setSearch(e.target.value)}
//                         placeholder="Search for songs Try searching for something ..."
//                         className="w-full bg-gray-800 text-white p-3 mb-6 rounded-lg border border-gray-700 focus:outline-none"
//                     />

//                     {/* Loader */}
//                     {loading ? (
//                         <div className="flex justify-center items-center py-10">
//                             <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
//                             <p className="ml-4 text-gray-400">Loading songs...</p>
//                         </div>
//                     ) : (
//                         <>
//                             {/* Songs List */}
//                             <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//                                 {filteredSongs.map(song => (
//                                     <li
//                                         key={song.id}
//                                         className={`flex items-center p-4 rounded-lg transition cursor-pointer ${currentPlaying === song.id ? 'bg-yellow-500' : 'bg-gray-800 hover:bg-gray-700'
//                                             }`}
//                                         onClick={() => playSong(song)}
//                                     >
//                                         <img
//                                             src={song.image?.[2]?.url || '/default-song.png'}
//                                             alt={song.name || 'Unknown Title'}
//                                             className="w-16 h-16 rounded-lg"
//                                             onError={(e) => (e.target.src = '/default-song.png')}
//                                         />
//                                         <div className="ml-4">
//                                             <p className="text-lg font-medium">{song.name || 'Unknown Title'}</p>
//                                             <p className="text-sm text-gray-400">{song.primaryArtists || 'Unknown Artist'}</p>
//                                         </div>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </>
//                     )}
//                 </div>
//             </div>
//             <MusicPlayer />
//         </div>
//     );
// };
// export default ExplorePage;





// import React, { useEffect, useState, useRef, useContext } from 'react';
// import axios from 'axios';
// import { SearchContext } from '../Components/UseContext/SearchContext';
// import SideBar from '../Components/FixedHomeComponents/SideBar';
// import NavBar from '../Components/FixedHomeComponents/NavBar';
// import MusicPlayer from '../Components/FixedHomeComponents/MusicPlayer';

// const ExplorePage = () => {
//     const { search, setSearch, setCurrentTrack } = useContext(SearchContext);
//     const [loading, setLoading] = useState(false);
//     const [songs, setSongs] = useState([]);
//     const [filteredSongs, setFilteredSongs] = useState([]);
//     const [currentPlaying, setCurrentPlaying] = useState(null);
//     const debounceTimeout = useRef(null);

//     // Fetch default songs when page loads
//     const fetchDefaultSongs = async () => {
//         setLoading(true);
//         try {
//             const { data } = await axios.get('https://saavn.dev/api/search/songs', {
//                 params: { query: 'trending', limit: 20 },
//             });

//             if (data?.data?.results) {
//                 setSongs(data.data.results);
//                 setFilteredSongs(data.data.results);
//             }
//         } catch (error) {
//             console.error('Failed to fetch default songs:', error);
//             setSongs([]);
//             setFilteredSongs([]);
//         } finally {
//             setLoading(false);
//         }
//     };

//     // Fetch searched songs
//     const fetchAPI = async () => {
//         if (!search) return;

//         setLoading(true);
//         try {
//             const { data } = await axios.get('https://saavn.dev/api/search/songs', {
//                 params: { query: search, limit: 40 },
//             });

//             if (data?.data?.results) {
//                 setFilteredSongs(data.data.results);
//             } else {
//                 setFilteredSongs([]);
//             }
//         } catch (error) {
//             console.error('Failed to fetch songs:', error);
//             setFilteredSongs([]);
//         } finally {
//             setLoading(false);
//         }
//     };

//     // Fetch default songs when the component mounts
//     useEffect(() => {
//         fetchDefaultSongs();
//     }, []);

//     // Debounce search input
//     useEffect(() => {
//         if (debounceTimeout.current) clearTimeout(debounceTimeout.current);

//         debounceTimeout.current = setTimeout(() => {
//             if (search && search.length >= 2) {
//                 fetchAPI();
//             } else if (!search) {
//                 setFilteredSongs(songs);
//             }
//         }, 500);

//         return () => clearTimeout(debounceTimeout.current);
//     }, [search, songs]);

//     // Handle play song
//     const playSong = (song) => {
//         const highestQuality = song.downloadUrl?.find(file => file.quality === '320kbps') || song.downloadUrl[0];
//         if (highestQuality) {
//             setCurrentTrack({
//                 url: highestQuality.url,
//                 title: song.name || 'Unknown Title',
//                 artist: song.primaryArtists || 'Unknown Artist',
//                 image: song.image?.[2]?.url || '/default-song.png',
//             });
//             setCurrentPlaying(song.id);
//         }
//     };

//     return (
//         <div className="flex">
//             {/* Sidebar */}
//             <SideBar />

//             {/* Explore Content */}
//             <div className="flex-1 bg-gray-900 min-h-screen text-white">
//                 {/* Navbar */}
//                 <NavBar />

//                 {/* Content */}
//                 <div className="p-6 overflow-y-auto h-[calc(100vh-6rem)]">
//                     {/* Header */}
//                     <div className="flex items-center justify-between mb-6">
//                         <h2 className="text-3xl font-bold flex items-center">
//                             <span className="mr-2 text-[#fbbf24]">🎵</span>
//                             Explore Music
//                         </h2>
//                     </div>

//                     {/* Search Bar */}
//                     <input
//                         type="text"
//                         value={search}
//                         onChange={(e) => setSearch(e.target.value)}
//                         placeholder="Search for songs..."
//                         className="w-full bg-gray-800 text-white p-3 mb-6 rounded-lg border border-gray-700 focus:outline-none"
//                     />

//                     {/* Loader */}
//                     {loading ? (
//                         <div className="flex justify-center items-center py-10">
//                             <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
//                             <p className="ml-4 text-gray-400">Loading songs...</p>
//                         </div>
//                     ) : (
//                         <>
//                             {/* Songs List */}
//                             <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//                                 {filteredSongs.map(song => (
//                                     <li
//                                         key={song.id}
//                                         className={`flex items-center p-4 rounded-lg transition cursor-pointer ${currentPlaying === song.id ? 'bg-yellow-500' : 'bg-gray-800 hover:bg-gray-700'
//                                             }`}
//                                         onClick={() => playSong(song)}
//                                     >
//                                         <img
//                                             src={song.image?.[2]?.url || '/default-song.png'}
//                                             alt={song.name || 'Unknown Title'}
//                                             className="w-16 h-16 rounded-lg"
//                                             onError={(e) => (e.target.src = '/default-song.png')}
//                                         />
//                                         <div className="ml-4">
//                                             <p className="text-lg font-medium">{song.name || 'Unknown Title'}</p>
//                                             <p className="text-sm text-gray-400">{song.primaryArtists || 'Unknown Artist'}</p>
//                                         </div>
//                                     </li>
//                                 ))}
//                             </ul>

//                             {/* No Results Message */}
//                             {!loading && filteredSongs.length === 0 && search.length >= 2 && (
//                                 <p className="text-gray-400 text-center mt-6">
//                                     No songs found. Try searching for something else!
//                                 </p>
//                             )}
//                         </>
//                     )}
//                 </div>
//             </div>

//             {/* Music Player */}
//             <MusicPlayer />
//         </div>
//     );
// };

// export default ExplorePage;







// import React, { useEffect, useState, useRef, useContext } from 'react';
// import axios from 'axios';
// import { SearchContext } from '../Components/UseContext/SearchContext';
// import SideBar from '../Components/FixedHomeComponents/SideBar';
// import NavBar from '../Components/FixedHomeComponents/NavBar';
// import MusicPlayer from '../Components/FixedHomeComponents/MusicPlayer';

// const ExplorePage = () => {
//     const { search, setSearch, setCurrentTrack } = useContext(SearchContext);
//     const [loading, setLoading] = useState(false);
//     const [songs, setSongs] = useState([]);
//     const [filteredSongs, setFilteredSongs] = useState([]);
//     const [currentPlaying, setCurrentPlaying] = useState(null);
//     const debounceTimeout = useRef(null);

//     // ✅ Fetch default songs when the page loads
//     const fetchDefaultSongs = async () => {
//         setLoading(true);
//         try {
//             const { data } = await axios.get('https://saavn.dev/api/search/songs', {
//                 params: { query: 'trending', limit: 20 },
//             });

//             if (data?.data?.results) {
//                 setSongs(data.data.results);
//                 setFilteredSongs(data.data.results);
//             }
//         } catch (error) {
//             console.error('Failed to fetch default songs:', error);
//             setSongs([]);
//             setFilteredSongs([]);
//         } finally {
//             setLoading(false);
//         }
//     };

//     // ✅ Fetch searched songs
//     const fetchSearchedSongs = async () => {
//         if (!search) return;

//         setLoading(true);
//         try {
//             const { data } = await axios.get('https://saavn.dev/api/search/songs', {
//                 params: { query: search, limit: 40 },
//             });

//             setFilteredSongs(data?.data?.results || []);
//         } catch (error) {
//             console.error('Failed to fetch songs:', error);
//             setFilteredSongs([]);
//         } finally {
//             setLoading(false);
//         }
//     };

//     // ✅ Fetch default songs on mount
//     useEffect(() => {
//         fetchDefaultSongs();
//     }, []);

//     // ✅ Debounced search handling
//     useEffect(() => {
//         if (debounceTimeout.current) clearTimeout(debounceTimeout.current);

//         debounceTimeout.current = setTimeout(() => {
//             if (search.length >= 2) {
//                 fetchSearchedSongs();
//             } else if (!search) {
//                 setFilteredSongs(songs);
//             }
//         }, 500);

//         return () => clearTimeout(debounceTimeout.current);
//     }, [search, songs]);

//     // ✅ Handle play song
//     const playSong = (song) => {
//         const highestQuality = song.downloadUrl?.find(file => file.quality === '320kbps') || song.downloadUrl?.[0];
//         if (highestQuality) {
//             setCurrentTrack({
//                 url: highestQuality.url,
//                 title: song.name || 'Unknown Title',
//                 artist: song.primaryArtists || 'Unknown Artist',
//                 image: song.image?.[2]?.url || '/default-song.png',
//             });
//             setCurrentPlaying(song.id);
//         }
//     };

//     return (
//         <div className="flex">
//             {/* ✅ Sidebar */}
//             <SideBar />

//             {/* ✅ Main Content */}
//             <div className="flex-1 bg-gray-900 min-h-screen text-white">
//                 {/* ✅ Navbar */}
//                 <NavBar />

//                 {/* ✅ Content */}
//                 <div className="p-6 overflow-y-auto h-[calc(100vh-6rem)]">
//                     {/* ✅ Header */}
//                     <div className="flex items-center justify-between mb-6">
//                         <h2 className="text-3xl font-bold flex items-center">
//                             <span className="mr-2 text-[#fbbf24]">🎵</span>
//                             Explore Music
//                         </h2>
//                     </div>

//                     {/* ✅ Search Bar */}
//                     <input
//                         type="text"
//                         value={search}
//                         onChange={(e) => setSearch(e.target.value)}
//                         placeholder="Search for songs Try searching for something ..."
//                         className="w-full bg-gray-800 text-white p-3 mb-6 rounded-lg border border-gray-700 focus:outline-none"
//                     />

//                     {/* ✅ Loader */}
//                     {loading ? (
//                         <div className="flex justify-center items-center py-10">
//                             <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
//                             <p className="ml-4 text-gray-400">Loading songs...</p>
//                         </div>
//                     ) : (
//                         <>
//                             {/* ✅ Songs List */}
//                             <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//                                 {filteredSongs.map(song => (
//                                     <li
//                                         key={song.id}
//                                         className={`flex items-center p-4 rounded-lg transition cursor-pointer ${currentPlaying === song.id
//                                             ? 'bg-yellow-500'
//                                             : 'bg-gray-800 hover:bg-gray-700'
//                                             }`}
//                                         onClick={() => playSong(song)}
//                                     >
//                                         <img
//                                             src={song.image?.[2]?.url || '/default-song.png'}
//                                             alt={song.name || 'Unknown Title'}
//                                             className="w-16 h-16 rounded-lg"
//                                             onError={(e) => (e.target.src = '/default-song.png')}
//                                         />
//                                         <div className="ml-4">
//                                             <p className="text-lg font-medium">{song.name || 'Unknown Title'}</p>
//                                             <p className="text-sm text-gray-400">
//                                                 {song.primaryArtists || 'Unknown Artist'}
//                                             </p>
//                                         </div>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </>
//                     )}
//                 </div>
//             </div>

//             {/* ✅ Music Player */}
//             <MusicPlayer />
//         </div>
//     );
// };

// export default ExplorePage;





// responsive code 




import React, { useEffect, useState, useRef, useContext } from 'react';
import axios from 'axios';
import { SearchContext } from '../Components/UseContext/SearchContext';
import SideBar from '../Components/FixedHomeComponents/SideBar';
import NavBar from '../Components/FixedHomeComponents/NavBar';
import MusicPlayer from '../Components/FixedHomeComponents/MusicPlayer';
import { Menu } from 'lucide-react';

const ExplorePage = () => {
    const { search, setSearch, setCurrentTrack } = useContext(SearchContext);
    const [loading, setLoading] = useState(false);
    const [songs, setSongs] = useState([]);
    const [filteredSongs, setFilteredSongs] = useState([]);
    const [currentPlaying, setCurrentPlaying] = useState(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const debounceTimeout = useRef(null);

    // ✅ Fetch default songs when the page loads
    const fetchDefaultSongs = async () => {
        setLoading(true);
        try {
            const { data } = await axios.get('https://saavn.dev/api/search/songs', {
                params: { query: 'trending', limit: 20 },
            });

            if (data?.data?.results) {
                setSongs(data.data.results);
                setFilteredSongs(data.data.results);
            }
        } catch (error) {
            console.error('Failed to fetch default songs:', error);
            setSongs([]);
            setFilteredSongs([]);
        } finally {
            setLoading(false);
        }
    };

    // ✅ Fetch searched songs
    const fetchSearchedSongs = async () => {
        if (!search) return;

        setLoading(true);
        try {
            const { data } = await axios.get('https://saavn.dev/api/search/songs', {
                params: { query: search, limit: 40 },
            });

            setFilteredSongs(data?.data?.results || []);
        } catch (error) {
            console.error('Failed to fetch songs:', error);
            setFilteredSongs([]);
        } finally {
            setLoading(false);
        }
    };

    // ✅ Fetch default songs on mount
    useEffect(() => {
        fetchDefaultSongs();
    }, []);

    // ✅ Debounced search handling
    useEffect(() => {
        if (debounceTimeout.current) clearTimeout(debounceTimeout.current);

        debounceTimeout.current = setTimeout(() => {
            if (search.length >= 2) {
                fetchSearchedSongs();
            } else if (!search) {
                setFilteredSongs(songs);
            }
        }, 500);

        return () => clearTimeout(debounceTimeout.current);
    }, [search, songs]);

    // ✅ Handle play song
    const playSong = (song) => {
        const highestQuality = song.downloadUrl?.find(file => file.quality === '320kbps') || song.downloadUrl?.[0];
        if (highestQuality) {
            setCurrentTrack({
                url: highestQuality.url,
                title: song.name || 'Unknown Title',
                artist: song.primaryArtists || 'Unknown Artist',
                image: song.image?.[2]?.url || '/default-song.png',
            });
            setCurrentPlaying(song.id);
        }
    };

    return (
        <section className=" w-screen h-screen overflow-hidden bg-black">
            {/* ✅ Sidebar */}
            <div className={`fixed top-0 left-0 h-full bg-gray-800 shadow-lg z-30 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:translate-x-0 md:w-64`}>
                <SideBar />
            </div>

            {/* ✅ Main Content */}
            <div className={`flex flex-col h-full ${isSidebarOpen ? 'ml-64' : 'ml-0'} transition-all duration-300 md:ml-64`}>
                {/* ✅ Navbar */}
                <div className="h-20 bg-gray-900 shadow-md fixed top-0 left-0 right-0 z-20 flex items-center px-6 md:left-64">
                    {/* ✅ Sidebar Toggle Button */}
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="md:hidden text-white mr-4"
                    >
                        <Menu size={28} />
                    </button>
                    <NavBar />
                </div>

                {/* ✅ Content */}
                <div className="flex-1 overflow-y-auto mt-20 p-6 bg-gray-900">
                    {/* ✅ Header */}
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl md:text-3xl font-bold flex items-center text-amber-400">
                            <span className="mr-2">🎵</span>
                            Explore Music
                        </h2>
                    </div>

                    {/* ✅ Search Bar */}
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search for songs..."
                        className="w-full bg-gray-800 text-white p-3 mb-6 rounded-lg border border-gray-700 focus:outline-none"
                    />

                    {/* ✅ Loader */}
                    {loading ? (
                        <div className="flex justify-center items-center py-10">
                            <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
                            <p className="ml-4 text-gray-400">Loading songs...</p>
                        </div>
                    ) : (
                        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            {filteredSongs.map(song => (
                                <li
                                    key={song.id}
                                    className={`flex items-center p-4 rounded-lg transition cursor-pointer ${currentPlaying === song.id
                                        ? 'bg-yellow-500'
                                        : 'bg-gray-800 hover:bg-gray-700'
                                        }`}
                                    onClick={() => playSong(song)}
                                >
                                    <img
                                        src={song.image?.[2]?.url || '/default-song.png'}
                                        alt={song.name || 'Unknown Title'}
                                        className="w-16 h-16 rounded-lg"
                                        onError={(e) => (e.target.src = '/default-song.png')}
                                    />
                                    <div className="ml-4">
                                        <p className="text-lg font-medium text-amber-400">{song.name || 'Unknown Title'}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* ✅ Music Player */}
                <div className="fixed bottom-0 left-0 right-0 h-20 bg-gray-900 shadow-md z-20 md:left-64">
                    <MusicPlayer />
                </div>
            </div>
        </section>
    );
};

export default ExplorePage;
