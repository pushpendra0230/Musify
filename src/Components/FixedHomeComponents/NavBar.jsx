// import React, { useContext } from 'react';
// import { SearchContext } from '../UseContext/SearchContext';

// const NavBar = () => {
//   const { search, setSearch } = useContext(SearchContext);

//   return (
//     <nav className="w-full h-16 bg-black flex items-center justify-between px-6 shadow-md">
//       {/* Search Bar */}
//       <div className="relative flex-1 max-w-lg">
//         <img
//           src="https://img.icons8.com/?size=60&id=59878&format=png"
//           alt="Search"
//           className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-100"
//         />
//         <input
//           type="text"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           placeholder="What do you want to listen to?"
//           className="w-full bg-gray-500 text-white pl-10 pr-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
//         />
//       </div>

//       {/* Right Section */}
//       <div className="flex items-center gap-4">
//         <img
//           src="https://cdn-icons-png.flaticon.com/512/1827/1827348.png"
//           alt="Notifications"
//           className="w-6 h-6 filter invert opacity-70 hover:opacity-100 cursor-pointer transition duration-300"
//         />
//         <div className="flex items-center justify-center font-semibold cursor-pointer">
//           <img
//             src="https://avatars.githubusercontent.com/u/153480201?v=4"
//             alt="Notifications"
//             className="w-10 h-10 rounded-full"
//           />
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;





// import React, { useContext } from 'react';
// import { SearchContext } from '../UseContext/SearchContext';
// import { useNavigate } from 'react-router-dom';

// const NavBar = () => {
//   const { search, setSearch } = useContext(SearchContext);
//   const navigate = useNavigate();

//   const goToFavorites = () => {
//     navigate('/favorites');
//   };

//   return (
//     <nav className="w-full h-16 bg-black flex items-center justify-between px-6 shadow-md">
//       {/* Search Bar */}
//       <div className="relative flex-1 max-w-lg">
//         <img
//           src="https://img.icons8.com/?size=60&id=59878&format=png"
//           alt="Search"
//           className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-100"
//         />
//         <input
//           type="text"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           placeholder="What do you want to listen to?"
//           className="w-full bg-gray-500 text-white pl-10 pr-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
//         />
//       </div>

//       {/* Right Section */}
//       <div className="flex items-center gap-4">
//         {/* Section Button */}
//         <img
//           src="https://cdn-icons-png.flaticon.com/512/1827/1827348.png"
//           alt="Notifications"
//           className="w-6 h-6 filter invert opacity-70 hover:opacity-100 cursor-pointer transition duration-300"
//           onClick={goToFavorites}
//         />

//         {/* Profile Avatar */}
//         <div className="flex items-center justify-center font-semibold cursor-pointer">
//           <img
//             src="https://avatars.githubusercontent.com/u/153480201?v=4"
//             alt="Profile"
//             className="w-10 h-10 rounded-full"
//           />
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;




// import React, { useContext } from 'react';
// import { SearchContext } from '../UseContext/SearchContext';
// import { useNavigate } from 'react-router-dom';

// const NavBar = () => {
//   const { search, setSearch } = useContext(SearchContext);
//   const navigate = useNavigate();

//   const goToFavorites = () => {
//     navigate('/favorites');
//   };

//   const goToProfile = () => {
//     navigate('/profile'); // ✅ Navigate to Profile Page
//   };

//   return (
//     <nav className="w-full h-16 bg-black flex items-center justify-between px-6 shadow-md">
//       {/* Search Bar */}
//       <div className="relative flex-1 max-w-lg">
//         <img
//           src="https://img.icons8.com/?size=60&id=59878&format=png"
//           alt="Search"
//           className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-100"
//         />
//         <input
//           type="text"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           placeholder="What do you want to listen to?"
//           className="w-full bg-gray-500 text-white pl-10 pr-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
//         />
//       </div>

//       {/* Right Section */}
//       <div className="flex items-center gap-4">
//         <img
//           src="https://cdn-icons-png.flaticon.com/512/1827/1827348.png"
//           alt="Notifications"
//           className="w-6 h-6 filter invert opacity-70 hover:opacity-100 cursor-pointer transition duration-300"
//           onClick={goToFavorites}
//         />

//         {/* ✅ Add Profile Navigation */}
//         <div
//           className="flex items-center justify-center font-semibold cursor-pointer"
//           onClick={goToProfile}
//         >
//           <img
//             src="https://avatars.githubusercontent.com/u/153480201?v=4"
//             alt="Profile"
//             className="w-10 h-10 rounded-full"
//           />
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;




// responsive code




// import React, { useContext } from 'react';
// import { SearchContext } from '../UseContext/SearchContext';
// import { useNavigate } from 'react-router-dom';

// const NavBar = () => {
//   const { search, setSearch } = useContext(SearchContext);
//   const navigate = useNavigate();

//   const goToFavorites = () => {
//     navigate('/favorites');
//   };

//   const goToProfile = () => {
//     navigate('/profile');
//   };

//   return (
//     <nav className="w-full h-16 bg-black flex items-center justify-between px-4 md:px-6 shadow-md">
//       {/* Search Bar */}
//       <div className="relative flex-1 max-w-full md:max-w-lg">
//         <img
//           src="https://img.icons8.com/?size=60&id=59878&format=png"
//           alt="Search"
//           className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-100"
//         />
//         <input
//           type="text"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           placeholder="What do you want to listen to?"
//           className="w-full bg-gray-500 text-white pl-10 pr-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
//         />
//       </div>

//       {/* Right Section */}
//       <div className="flex items-center gap-2 md:gap-4 ml-2">
//         {/* Notifications Icon */}
//         <img
//           src="https://cdn-icons-png.flaticon.com/512/1827/1827348.png"
//           alt="Notifications"
//           className="w-5 h-5 md:w-6 md:h-6 filter invert opacity-70 hover:opacity-100 cursor-pointer transition duration-300"
//           onClick={goToFavorites}
//         />

//         {/* Profile Icon */}
//         <div
//           className="flex items-center justify-center font-semibold cursor-pointer"
//           onClick={goToProfile}
//         >
//           <img
//             src="https://avatars.githubusercontent.com/u/153480201?v=4"
//             alt="Profile"
//             className="w-8 h-8 md:w-10 md:h-10 rounded-full"
//           />
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;







import React, { useContext } from 'react';
import { SearchContext } from '../UseContext/SearchContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const { search, setSearch } = useContext(SearchContext);
  const navigate = useNavigate();

  const goToFavorites = () => {
    navigate('/favorites');
  };

  const goToProfile = () => {
    navigate('/profile');
  };

  return (
    <nav className="w-full h-16 bg-black flex items-center justify-between px-4 md:px-6 shadow-md">
      <Link to="/homepage" className="flex items-center gap-2">
        <img
          src="https://img.icons8.com/?size=96&id=UpZw1qeZM751&format=png"
          alt="Logo"
          className="w-8 h-8"
        />
        <span className="text-lg font-bold text-white hidden md:block">Musify</span>
      </Link>

      <div className="relative flex-1 max-w-full md:max-w-lg mx-4">
        <img
          src="https://img.icons8.com/?size=60&id=59878&format=png"
          alt="Search"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-100"
        />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Musify"
          className="w-full bg-gray-500 text-white pl-10 pr-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div className="flex items-center gap-2 md:gap-4 ml-2">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1827/1827348.png"
          alt="Notifications"
          className="w-5 h-5 md:w-6 md:h-6 filter invert opacity-70 hover:opacity-100 cursor-pointer transition duration-300"
          onClick={goToFavorites}
        />

        <div
          className="flex items-center justify-center font-semibold cursor-pointer"
          onClick={goToProfile}
        >
          <img
            src="https://avatars.githubusercontent.com/u/153480201?v=4"
            alt="Profile"
            className="w-8 h-8 md:w-10 md:h-10 rounded-full"
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;