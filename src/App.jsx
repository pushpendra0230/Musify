// import React from 'react';
// import HomePage from './Pages/HomePage';
// import ExplorePage from './Pages/ExplorePage';
// import FavoritesPage from './Pages/FavoritesPage';
// import { SearchProvider } from '../src/Components/UseContext/SearchContext';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import SignUp from './Components/Authentication/SignUp';
// import LogIn from './Components/Authentication/LogIn';
// import MusicPlayer from './Components/FixedHomeComponents/MusicPlayer';

// const App = () => {
//   const userData = JSON.parse(localStorage.getItem('user'));

//   return (
//     <BrowserRouter>
//       <SearchProvider>
//         {/* Render MusicPlayer globally so that it persists across pages */}
//         <MusicPlayer />
//         <Routes>
//           <Route path="/" element={<SignUp />} />
//           <Route path="/login" element={<LogIn />} />
//           <Route
//             path="/homepage"
//             element={userData ? <HomePage /> : <LogIn />}
//           />
//           <Route
//             path="/explore"
//             element={userData ? <ExplorePage /> : <LogIn />}
//           />
//           <Route
//             path="/favorites"
//             element={userData ? <FavoritesPage /> : <LogIn />}
//           />
//         </Routes>
//       </SearchProvider>
//     </BrowserRouter>
//   );
// };

// export default App;



// import React from 'react';
// import HomePage from './Pages/HomePage';
// import ExplorePage from './Pages/ExplorePage';
// import FavoritesPage from './Pages/FavoritesPage';
// import { SearchProvider } from '../src/Components/UseContext/SearchContext';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import MusicPlayer from './Components/FixedHomeComponents/MusicPlayer';

// const App = () => {
//   return (
//     <BrowserRouter>
//       <SearchProvider>
//         {/* Render MusicPlayer globally so that it persists across pages */}
//         <MusicPlayer />
//         <Routes>
//           <Route path="/" element={<Navigate to="/homepage" />} />
//           <Route path="/homepage" element={<HomePage />} />
//           <Route path="/explore" element={<ExplorePage />} />
//           <Route path="/favorites" element={<FavoritesPage />} />
//         </Routes>
//       </SearchProvider>
//     </BrowserRouter>
//   );
// };

// export default App;




// import React from 'react';
// import HomePage from './Pages/HomePage';
// import ExplorePage from './Pages/ExplorePage';
// import FavoritesPage from './Pages/FavoritesPage';
// import ProfilePage from './Pages/ProfilePage';
// import { SearchProvider } from '../src/Components/UseContext/SearchContext';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import MusicPlayer from './Components/FixedHomeComponents/MusicPlayer';

// const App = () => {
//   return (
//     <BrowserRouter>
//       <SearchProvider>
//         <MusicPlayer />
//         <Routes>
//           <Route path="/" element={<Navigate to="/homepage" />} />
//           <Route path="/homepage" element={<HomePage />} />
//           <Route path="/explore" element={<ExplorePage />} />
//           <Route path="/favorites" element={<FavoritesPage />} />
//           <Route path="/profile" element={<ProfilePage />} />
//         </Routes>
//       </SearchProvider>
//     </BrowserRouter>
//   );
// };

// export default App;



import React from 'react';
import HomePage from './Pages/HomePage';
import ExplorePage from './Pages/ExplorePage';
import FavoritesPage from './Pages/FavoritesPage';
import ProfilePage from './Pages/ProfilePage';
import { SearchProvider } from '../src/Components/UseContext/SearchContext';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import MusicPlayer from './Components/FixedHomeComponents/MusicPlayer';

const App = () => {
  const location = useLocation();

  return (
    <SearchProvider>
      {location.pathname !== '/profile' && <MusicPlayer />}
      <Routes>
        <Route path="/" element={<Navigate to="/homepage" />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </SearchProvider>
  );
};

const Root = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default Root;