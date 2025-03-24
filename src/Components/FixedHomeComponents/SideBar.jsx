// import React from 'react';

// const SideBar = () => {
//   return (
//     <aside className="w-64 h-screen bg-black text-white flex flex-col gap-2 py-6 px-4">
//       {/* Logo */}
//       <div className="flex items-center gap-2 mb-8">
//         <img src="https://img.icons8.com/?size=96&id=G9XXzb9XaEKX&format=png" alt="Logo" className="w-8 h-8" />
//         <span className="text-lg font-bold">Spotify</span>
//       </div>

//       {/* Navigation List */}
//       <ul className="flex flex-col gap-4">
//         <SideBarItem icon="https://img.icons8.com/?size=100&id=6AGHyLA8bTw4&format=gif" label="Home" />
//         <SideBarItem icon="https://img.icons8.com/?size=100&id=aBNtkpYvycsP&format=gif" label="Explore" />
//         <SideBarItem icon="https://img.icons8.com/?size=100&id=cKMLz92tmasS&format=gif" label="Favorites" />
//       </ul>

//       {/* Library Section */}
//       <div className="mt-8 text-gray-400 text-sm">YOUR LIBRARY</div>
//       <ul className="flex flex-col gap-4 mt-2">
//         <SideBarItem label="Recently Played" />
//         <SideBarItem label="Albums" />
//         <SideBarItem label="Podcasts" />
//       </ul>
//     </aside>
//   );
// };

// const SideBarItem = ({ icon, label }) => (
//   <li className="flex items-center gap-3 text-gray-400 hover:text-white cursor-pointer transition duration-300">
//     {icon && <img src={icon} alt={label} className="w-6 h-6" />}
//     <span className="text-sm">{label}</span>
//   </li>
// );

// export default SideBar;







// import React from 'react';
// import { Link } from 'react-router-dom';

// const SideBar = () => {
//   return (
//     <aside className="w-64 h-screen bg-black text-white flex flex-col gap-2 py-6 px-4">
//       {/* Logo */}
//       <div className="flex items-center gap-2 mb-8">
//         <img src="https://img.icons8.com/?size=96&id=G9XXzb9XaEKX&format=png" alt="Logo" className="w-8 h-8" />
//         <span className="text-lg font-bold">Spotify</span>
//       </div>

//       {/* Navigation List */}
//       <ul className="flex flex-col gap-4">
//         <Link to="/homepage">
//           <SideBarItem icon="https://img.icons8.com/?size=100&id=6AGHyLA8bTw4&format=gif" label="Home" />
//         </Link>
//         <Link to="/explore">
//           <SideBarItem icon="https://img.icons8.com/?size=100&id=aBNtkpYvycsP&format=gif" label="Explore" />
//         </Link>
//         <SideBarItem icon="https://img.icons8.com/?size=100&id=cKMLz92tmasS&format=gif" label="Favorites" />
//       </ul>

//       {/* Library Section */}
//       <div className="mt-8 text-gray-400 text-sm">YOUR LIBRARY</div>
//       <ul className="flex flex-col gap-4 mt-2">
//         <SideBarItem label="Recently Played" />
//         <SideBarItem label="Albums" />
//         <SideBarItem label="Podcasts" />
//       </ul>
//     </aside>
//   );
// };

// const SideBarItem = ({ icon, label }) => (
//   <li className="flex items-center gap-3 text-gray-400 hover:text-white cursor-pointer transition duration-300">
//     {icon && <img src={icon} alt={label} className="w-6 h-6" />}
//     <span className="text-sm">{label}</span>
//   </li>
// );

// export default SideBar;







// import React from 'react';
// import { Link } from 'react-router-dom';

// const SideBar = () => {
//   return (
//     <aside className="w-64 h-screen bg-black text-white flex flex-col gap-2 py-6 px-4">
//       {/* Logo */}
//       <div className="flex items-center gap-2 mb-8">
//         <img
//           src="https://img.icons8.com/?size=96&id=UpZw1qeZM751&format=png"
//           alt="Logo"
//           className="w-8 h-8"
//         />
//         <span className="text-lg font-bold">Musify</span>
//       </div>

//       {/* Navigation List */}
//       <ul className="flex flex-col gap-4">
//         <SideBarItem to="/homepage" icon="https://img.icons8.com/?size=100&id=6AGHyLA8bTw4&format=gif" label="Home" />
//         <SideBarItem to="/explore" icon="https://img.icons8.com/?size=100&id=aBNtkpYvycsP&format=gif" label="Explore" />
//         <SideBarItem to="/favorites" icon="https://img.icons8.com/?size=100&id=cKMLz92tmasS&format=gif" label="Favorites" />
//       </ul>
//     </aside>
//   );
// };

// const SideBarItem = ({ to, icon, label }) => (
//   <li>
//     <Link
//       to={to}
//       className="flex items-center gap-3 text-gray-400 hover:text-white cursor-pointer transition duration-300"
//     >
//       {icon && <img src={icon} alt={label} className="w-6 h-6" />}
//       <span className="text-sm">{label}</span>
//     </Link>
//   </li>
// );

// export default SideBar;






// responsive code with proper menu bar


import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Heart, Music, User } from 'lucide-react';

const SideBar = () => {
  return (
    <aside className="w-64 h-screen bg-gray-900 text-gray-300 flex flex-col gap-2 py-6 px-4">
      {/* ✅ Logo and Name with Link */}
      <Link to="/homepage" className="flex items-center gap-2 mb-8">
        <img
          src="https://img.icons8.com/?size=96&id=UpZw1qeZM751&format=png"
          alt="Logo"
          className="w-8 h-8"
        />
        <span className="text-lg font-bold text-white">Musify</span>
      </Link>

      {/* ✅ Navigation List */}
      <ul className="flex flex-col gap-4">
        <SideBarItem to="/homepage" icon={<Home size={20} />} label="Home" />
        <SideBarItem to="/explore" icon={<Music size={20} />} label="Explore" />
        <SideBarItem to="/favorites" icon={<Heart size={20} />} label="Favorites" />
        <SideBarItem to="/profile" icon={<User size={20} />} label="Profile" />
      </ul>
    </aside>
  );
};

const SideBarItem = ({ to, icon, label }) => (
  <li>
    <Link
      to={to}
      className="flex items-center gap-3 text-gray-400 hover:text-white cursor-pointer transition duration-300"
    >
      {icon}
      <span className="text-sm">{label}</span>
    </Link>
  </li>
);

export default SideBar;