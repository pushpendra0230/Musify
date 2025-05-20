// import React from 'react';
// import NavBar from '../Components/FixedHomeComponents/NavBar';
// import SideBar from '../Components/FixedHomeComponents/SideBar';
// import MusicPlayer from '../Components/FixedHomeComponents/MusicPlayer';
// import SongList from '../Components/API/SongList';

// const HomePage = () => {
//   return (
//     <section className="w-screen h-screen overflow-hidden">

//       <div className="fixed top-0 left-0 h-full w-64 bg-gray-900 shadow-lg z-20">
//         <SideBar />
//       </div>

//       <div className="ml-64 h-full flex flex-col">

//         <div className="h-20 bg-black shadow-md fixed top-0 left-64 right-0 z-10 flex items-center px-6">
//           <NavBar />
//         </div>

//         <div className="flex-1 overflow-y-auto mt-20 p-6 bg-black">
//           <SongList />
//         </div>
//       </div>

//       <div className="fixed bottom-0 left-64 right-0 h-20 bg-black shadow-md z-20">
//         <MusicPlayer />
//       </div>
//     </section>
//   );
// };
// export default HomePage;







// responsive code 



import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import NavBar from '../Components/FixedHomeComponents/NavBar';
import SideBar from '../Components/FixedHomeComponents/SideBar';
import MusicPlayer from '../Components/FixedHomeComponents/MusicPlayer';
import SongList from '../Components/API/SongList';

const HomePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <section className="w-screen h-screen overflow-hidden bg-black">
      <div className={`fixed top-0 left-0 h-full bg-gray-900 shadow-lg z-30 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:translate-x-0 md:w-64`}>
        <SideBar />
      </div>

      <div className={`flex flex-col h-full ${isSidebarOpen ? 'ml-64' : 'ml-0'} transition-all duration-300 md:ml-64`}>
        <div className="h-20 bg-black shadow-md fixed top-0 left-0 right-0 z-20 flex items-center px-6 md:left-64">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="md:hidden text-gray-300 mr-4"
          >
            <Menu size={24} />
          </button>
          <NavBar />
        </div>

        <div className="flex-1 overflow-y-auto mt-20 p-6 bg-black">
          <SongList />
        </div>

        <div className="fixed bottom-0 left-0 right-0 h-20 bg-black shadow-md z-20 md:left-64">
          <MusicPlayer />
        </div>
      </div>
    </section>
  );
};

export default HomePage;