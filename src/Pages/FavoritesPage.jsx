// // import React from 'react';
// // import SideBar from '../Components/FixedHomeComponents/SideBar';

// // const FavoritesPage = ({ favorites, playSong }) => {
// //     return (
// //         <div className="flex">
// //             {/* Sidebar */}
// //             <SideBar />

// //             {/* Favorites Content */}
// //             <div className="flex-1 p-6 bg-gray-900 text-white min-h-screen">
// //                 <h2 className="text-3xl font-bold mb-6 flex items-center">
// //                     <span className="mr-2 text-[#fbbf24]">❤️</span>
// //                     Your Favorites
// //                 </h2>

// //                 {favorites.length === 0 ? (
// //                     <p className="text-gray-400">No favorite songs yet. Start adding some!</p>
// //                 ) : (
// //                     <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
// //                         {favorites.map((song) => (
// //                             <li
// //                                 key={song.id}
// //                                 className="flex items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition cursor-pointer"
// //                                 onClick={() => playSong(song)}
// //                             >
// //                                 <img
// //                                     src={song.image[2]?.url}
// //                                     alt={song.name}
// //                                     className="w-16 h-16 rounded-lg"
// //                                 />
// //                                 <div className="ml-4">
// //                                     <p className="text-lg font-medium">{song.name}</p>
// //                                     <p className="text-sm text-gray-400">{song.primaryArtists}</p>
// //                                 </div>
// //                             </li>
// //                         ))}
// //                     </ul>
// //                 )}
// //             </div>
// //         </div>
// //     );
// // };

// // export default FavoritesPage;



// import React, { useState, useEffect } from 'react';
// import NavBar from '../Components/FixedHomeComponents/NavBar';
// import SideBar from '../Components/FixedHomeComponents/SideBar';

// const FavoritesPage = () => {
//     const [favorites, setFavorites] = useState([]);

//     useEffect(() => {
//         // Load saved favorites from local storage
//         const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
//         setFavorites(savedFavorites);
//     }, []);

//     return (
//         <div className="flex">
//             {/* Sidebar */}
//             <SideBar />

//             <div className="flex-1 bg-gray-900 min-h-screen text-white">
//                 {/* Navbar */}
//                 <NavBar />

//                 {/* Remove min-h-screen here to avoid overflow */}
//                 <div className="p-6 bg-gray-900 text-white">
//                     <h2 className="text-3xl font-bold mb-6 text-[#fbbf24]">❤️ Favorites</h2>

//                     {favorites.length > 0 ? (
//                         <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//                             {favorites.map((song) => (
//                                 <li
//                                     key={song.id}
//                                     className="flex items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition cursor-pointer"
//                                 >
//                                     <img
//                                         src={song.image}
//                                         alt={song.title}
//                                         className="w-16 h-16 rounded-lg"
//                                     />
//                                     <div className="ml-4">
//                                         <p className="text-lg font-medium">{song.title}</p>
//                                         <p className="text-sm text-gray-400">{song.artist}</p>
//                                     </div>
//                                 </li>
//                             ))}
//                         </ul>
//                     ) : (
//                         <p className="text-gray-400">No favorites added yet!</p>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FavoritesPage;




// responsive code 





import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import NavBar from '../Components/FixedHomeComponents/NavBar';
import SideBar from '../Components/FixedHomeComponents/SideBar';

const FavoritesPage = () => {
    const [favorites, setFavorites] = useState([]);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        // Load saved favorites from local storage
        const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(savedFavorites);
    }, []);

    return (
        <section className="w-screen h-screen overflow-hidden bg-gray-900 text-white">
            {/* ✅ Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full bg-gray-900 shadow-lg z-30 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    } transition-transform duration-300 md:translate-x-0 md:w-64`}
            >
                <SideBar />
            </div>

            {/* ✅ Main Content */}
            <div
                className={`flex flex-col h-full ${isSidebarOpen ? 'ml-64' : 'ml-0'
                    } transition-all duration-300 md:ml-64`}
            >
                {/* ✅ Navbar */}
                <div className="h-20 bg-black shadow-md fixed top-0 left-0 right-0 z-20 flex items-center px-6 md:left-64">
                    {/* ✅ Menu Button for Small Screens */}
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="md:hidden text-gray-300 mr-4"
                    >
                        <Menu size={24} />
                    </button>
                    <NavBar />
                </div>

                {/* ✅ Content Section */}
                <div className="flex-1 overflow-y-auto mt-20 p-6 bg-gray-900">
                    {/* ✅ Header */}
                    <h2 className="text-3xl font-bold mb-6 text-[#fbbf24] flex items-center">
                        <span className="mr-2">❤️</span>
                        Favorites
                    </h2>

                    {/* ✅ Favorites List */}
                    {favorites.length > 0 ? (
                        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {favorites.map((song) => (
                                <li
                                    key={song.id}
                                    className="flex items-center bg-gray-800 hover:bg-gray-700 transition-colors duration-300 rounded-lg p-4 cursor-pointer shadow-lg"
                                >
                                    {/* ✅ Song Image */}
                                    <img
                                        src={song.image || '/default-song.png'}
                                        alt={song.title || 'Unknown Title'}
                                        className="w-16 h-16 object-cover rounded-lg"
                                        onError={(e) => (e.target.src = '/default-song.png')}
                                    />
                                    {/* ✅ Song Info */}
                                    <div className="ml-4">
                                        <p className="text-lg font-semibold truncate max-w-[150px]">
                                            {song.title || 'Unknown Title'}
                                        </p>
                                        <p className="text-sm text-gray-400 truncate max-w-[150px]">
                                            {song.artist || 'Unknown Artist'}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-400 text-center mt-6">
                            No favorites added yet! 🌟
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default FavoritesPage;