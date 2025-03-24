// import React, { createContext, useState } from 'react';

// export const SearchContext = createContext();

// export const SearchProvider = ({ children }) => {
//   const [search, setSearch] = useState('');
//   const [currentTrack, setCurrentTrack] = useState(null);

//   const value = {
//     search,
//     setSearch,
//     currentTrack,
//     setCurrentTrack,
//   };

//   return (
//     <SearchContext.Provider value={value}>
//       {children}
//     </SearchContext.Provider>
//   );
// };






// import React, { createContext, useState, useEffect } from 'react';

// export const SearchContext = createContext();

// export const SearchProvider = ({ children }) => {
//   const [search, setSearch] = useState('');
//   const [currentTrack, setCurrentTrack] = useState(null);
//   const [favorites, setFavorites] = useState([]);

//   useEffect(() => {
//     const savedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
//     setFavorites(savedFavorites);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('favorites', JSON.stringify(favorites));
//   }, [favorites]);

//   const toggleFavorite = (track) => {
//     setFavorites((prev) =>
//       prev.some((fav) => fav.id === track.id)
//         ? prev.filter((fav) => fav.id !== track.id)
//         : [...prev, track]
//     );
//   };

//   const value = {
//     search,
//     setSearch,
//     currentTrack,
//     setCurrentTrack,
//     favorites,
//     toggleFavorite,
//   };

//   return (
//     <SearchContext.Provider value={value}>
//       {children}
//     </SearchContext.Provider>
//   );
// };






// import { createContext, useState, useEffect } from 'react';

// const SearchContext = createContext();

// export const SearchProvider = ({ children }) => {
//   const [currentTrack, setCurrentTrack] = useState(null);
//   const [favorites, setFavorites] = useState([]);

//   useEffect(() => {
//     const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
//     setFavorites(savedFavorites);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('favorites', JSON.stringify(favorites));
//   }, [favorites]);

//   const toggleFavorite = (track) => {
//     setFavorites((prev) =>
//       prev.some((fav) => fav.id === track.id)
//         ? prev.filter((fav) => fav.id !== track.id)
//         : [...prev, track]
//     );
//   };

//   return (
//     <SearchContext.Provider value={{ currentTrack, setCurrentTrack, toggleFavorite, favorites }}>
//       {children}
//     </SearchContext.Provider>
//   );
// };

// export { SearchContext };
// export default SearchContext;




import React, { createContext, useState, useEffect } from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState('');
  const [currentTrack, setCurrentTrack] = useState(null);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(savedFavorites);
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (track) => {
    setFavorites((prev) =>
      prev.some((fav) => fav.id === track.id)
        ? prev.filter((fav) => fav.id !== track.id)
        : [...prev, track]
    );
  };

  const value = {
    search,
    setSearch,
    currentTrack,
    setCurrentTrack,
    favorites,
    toggleFavorite,
  };

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
};