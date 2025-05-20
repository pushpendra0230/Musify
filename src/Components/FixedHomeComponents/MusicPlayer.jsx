// import React, { useContext, useEffect, useRef, useState } from 'react';
// import { SearchContext } from '../UseContext/SearchContext';

// const MusicPlayer = () => {
//   const { currentTrack } = useContext(SearchContext);
//   const audioElement = useRef(null);
//   const [playing, setPlaying] = useState(false);
//   const [elapsedTime, setElapsedTime] = useState(0);
//   const [totalDuration, setTotalDuration] = useState(0);

//   useEffect(() => {
//     if (currentTrack && audioElement.current) {
//       audioElement.current.play()
//         .then(() => setPlaying(true))
//         .catch(err => console.error('Failed to play the song:', err));
//     }
//   }, [currentTrack]);

//   const handlePlayPause = () => {
//     if (audioElement.current) {
//       if (playing) {
//         audioElement.current.pause();
//       } else {
//         audioElement.current.play();
//       }
//       setPlaying(!playing);
//     }
//   };

//   const updateTime = () => setElapsedTime(audioElement.current?.currentTime || 0);

//   const loadMetadata = () => setTotalDuration(audioElement.current?.duration || 0);

//   const formatDuration = (time) => {
//     const minutes = Math.floor(time / 60);
//     const seconds = Math.floor(time % 60);
//     return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
//   };

//   return (
//     <div className="fixed bottom-0 left-0 right-0 h-24 flex items-center justify-between px-8 border-t bg-gradient-to-r from-emerald-700 via-green-500 to-lime-400 shadow-lg">
//       <audio
//         ref={audioElement}
//         src={currentTrack?.url}
//         onTimeUpdate={updateTime}
//         onLoadedMetadata={loadMetadata}
//       />

//       <div className="flex items-center space-x-2">
//         <img
//           src={currentTrack?.image || "https://img.icons8.com/?size=96&id=G9XXzb9XaEKX&format=png"}
//           alt="Album cover"
//           className="w-10 h-10 rounded"
//         />
//         <div>
//           <p className="text-sm font-semibold text-white">{currentTrack?.title || "No Music selected"}</p>
//           <p className="text-xs text-white">{currentTrack?.artist || "Unknown artist"}</p>
//         </div>
//       </div>

//       <div className="flex-1 flex flex-col items-center justify-center">
//         <button
//           className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold"
//           onClick={handlePlayPause}
//         >
//           {playing ? '❚❚' : '▶'}
//         </button>

//         <div className="flex items-center space-x-2 mt-2 w-full max-w-md">
//           <span className="text-xs text-black">{formatDuration(elapsedTime)}</span>
//           <div className="flex-1 h-1 bg-gray-300 rounded">
//             <div
//               className="h-full bg-green-500 rounded"
//               style={{ width: totalDuration ? `${(elapsedTime / totalDuration) * 100}%` : '0%' }}
//             ></div>
//           </div>
//           <span className="text-xs text-black">{formatDuration(totalDuration)}</span>
//         </div>
//       </div>

//       <div className="flex items-center space-x-4">
//         <button className="text-black text-2xl w-12 h-12 flex items-center justify-center">❤️</button>
//       </div>
//     </div>
//   );
// };

// export default MusicPlayer;










// import React, { useContext, useEffect, useRef, useState } from 'react';
// import { SearchContext } from '../UseContext/SearchContext';

// let globalAudioElement = null; // ✅ Global reference to the audio element

// const MusicPlayer = () => {
//   const { currentTrack } = useContext(SearchContext);
//   const audioElement = useRef(null);
//   const [playing, setPlaying] = useState(false);
//   const [elapsedTime, setElapsedTime] = useState(0);
//   const [totalDuration, setTotalDuration] = useState(0);

//   useEffect(() => {
//     if (currentTrack && audioElement.current) {
//       // Stop previous audio before playing a new one
//       if (globalAudioElement && globalAudioElement !== audioElement.current) {
//         globalAudioElement.pause();
//       }
//       globalAudioElement = audioElement.current;

//       audioElement.current.src = currentTrack.url;
//       audioElement.current
//         .play()
//         .then(() => setPlaying(true))
//         .catch((err) => console.error('Failed to play the song:', err));
//     }
//   }, [currentTrack]);

//   const handlePlayPause = () => {
//     if (audioElement.current) {
//       if (playing) {
//         audioElement.current.pause();
//       } else {
//         audioElement.current.play();
//       }
//       setPlaying(!playing);
//     }
//   };

//   const updateTime = () => setElapsedTime(audioElement.current?.currentTime || 0);

//   const loadMetadata = () => setTotalDuration(audioElement.current?.duration || 0);

//   const formatDuration = (time) => {
//     const minutes = Math.floor(time / 60);
//     const seconds = Math.floor(time % 60);
//     return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
//   };

//   return (
//     <div className="fixed bottom-0 left-0 right-0 h-24 flex items-center justify-between px-8 border-t bg-gradient-to-r from-emerald-700 via-green-500 to-lime-400 shadow-lg">
//       <audio
//         ref={audioElement}
//         onTimeUpdate={updateTime}
//         onLoadedMetadata={loadMetadata}
//       />

//       <div className="flex items-center space-x-2">
//         <img
//           src={currentTrack?.image || "https://img.icons8.com/?size=96&id=G9XXzb9XaEKX&format=png"}
//           alt="Album cover"
//           className="w-10 h-10 rounded"
//         />
//         <div>
//           <p className="text-sm font-semibold text-white">{currentTrack?.title || "No Music selected"}</p>
//           <p className="text-xs text-white">{currentTrack?.artist || "Unknown artist"}</p>
//         </div>
//       </div>

//       <div className="flex-1 flex flex-col items-center justify-center">
//         <button
//           className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold"
//           onClick={handlePlayPause}
//         >
//           {playing ? '❚❚' : '▶'}
//         </button>

//         <div className="flex items-center space-x-2 mt-2 w-full max-w-md">
//           <span className="text-xs text-black">{formatDuration(elapsedTime)}</span>
//           <div className="flex-1 h-1 bg-gray-300 rounded">
//             <div
//               className="h-full bg-green-500 rounded"
//               style={{ width: totalDuration ? `${(elapsedTime / totalDuration) * 100}%` : '0%' }}
//             ></div>
//           </div>
//           <span className="text-xs text-black">{formatDuration(totalDuration)}</span>
//         </div>
//       </div>

//       <div className="flex items-center space-x-4">
//         <button className="text-black text-2xl w-12 h-12 flex items-center justify-center">❤️</button>
//       </div>
//     </div>
//   );
// };

// export default MusicPlayer;











// import React, { useContext, useEffect, useRef, useState } from 'react';
// import SearchContext from '../UseContext/SearchContext';

// let globalAudioElement = null;

// const MusicPlayer = () => {
//   const context = useContext(SearchContext);

//   if (!context) {
//     throw new Error('MusicPlayer must be used within a SearchProvider');
//   }

//   const { currentTrack, toggleFavorite, favorites } = context;

//   const audioElement = useRef(null);
//   const [playing, setPlaying] = useState(false);
//   const [elapsedTime, setElapsedTime] = useState(0);
//   const [totalDuration, setTotalDuration] = useState(0);

//   useEffect(() => {
//     if (currentTrack && audioElement.current) {
//       if (globalAudioElement && globalAudioElement !== audioElement.current) {
//         globalAudioElement.pause();
//       }
//       globalAudioElement = audioElement.current;

//       audioElement.current.src = currentTrack.url;
//       audioElement.current
//         .play()
//         .then(() => setPlaying(true))
//         .catch((err) => console.error('Failed to play the song:', err));
//     }
//   }, [currentTrack]);

//   const handlePlayPause = () => {
//     if (audioElement.current) {
//       if (playing) {
//         audioElement.current.pause();
//       } else {
//         audioElement.current.play();
//       }
//       setPlaying(!playing);
//     }
//   };

//   const updateTime = () => setElapsedTime(audioElement.current?.currentTime || 0);
//   const loadMetadata = () => setTotalDuration(audioElement.current?.duration || 0);

//   const formatDuration = (time) => {
//     const minutes = Math.floor(time / 60);
//     const seconds = Math.floor(time % 60);
//     return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
//   };

//   const isFavorite = currentTrack && favorites.some((fav) => fav.id === currentTrack.id);

//   return (
//     <div className="fixed bottom-0 left-0 right-0 h-24 flex items-center justify-between px-8 border-t bg-gradient-to-r from-emerald-700 via-green-500 to-lime-400 shadow-lg">
//       <audio
//         ref={audioElement}
//         onTimeUpdate={updateTime}
//         onLoadedMetadata={loadMetadata}
//       />

//       {/* Song Info */}
//       <div className="flex items-center space-x-2">
//         <img
//           src={currentTrack?.image || "https://img.icons8.com/?size=96&id=G9XXzb9XaEKX&format=png"}
//           alt="Album cover"
//           className="w-10 h-10 rounded"
//         />
//         <div>
//           <p className="text-sm font-semibold text-white">{currentTrack?.title || "No Music selected"}</p>
//           <p className="text-xs text-white">{currentTrack?.artist || "Unknown artist"}</p>
//         </div>
//       </div>

//       {/* Play/Pause and Progress Bar */}
//       <div className="flex-1 flex flex-col items-center justify-center">
//         <button
//           className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold"
//           onClick={handlePlayPause}
//         >
//           {playing ? '❚❚' : '▶'}
//         </button>

//         <div className="flex items-center space-x-2 mt-2 w-full max-w-md">
//           <span className="text-xs text-black">{formatDuration(elapsedTime)}</span>
//           <div className="flex-1 h-1 bg-gray-300 rounded">
//             <div
//               className="h-full bg-green-500 rounded"
//               style={{ width: totalDuration ? `${(elapsedTime / totalDuration) * 100}%` : '0%' }}
//             ></div>
//           </div>
//           <span className="text-xs text-black">{formatDuration(totalDuration)}</span>
//         </div>
//       </div>

//       {/* Favorite Button */}
//       <div className="flex items-center space-x-4">
//         <button
//           onClick={() => currentTrack && toggleFavorite(currentTrack)}
//           className="text-black text-2xl w-12 h-12 flex items-center justify-center"
//         >
//           {isFavorite ? '❤️' : '🤍'}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MusicPlayer;







// import React, { useContext, useEffect, useRef, useState } from 'react';
// import { SearchContext } from '../UseContext/SearchContext';

// let globalAudioElement = null;

// const MusicPlayer = () => {
//   const {
//     currentTrack,
//     toggleFavorite,
//     favorites,
//   } = useContext(SearchContext);

//   const audioElement = useRef(null);
//   const [playing, setPlaying] = useState(false);
//   const [elapsedTime, setElapsedTime] = useState(0);
//   const [totalDuration, setTotalDuration] = useState(0);

//   // ✅ Handle playing new track
//   useEffect(() => {
//     if (currentTrack && audioElement.current) {
//       if (globalAudioElement && globalAudioElement !== audioElement.current) {
//         globalAudioElement.pause();
//       }
//       globalAudioElement = audioElement.current;
//       audioElement.current.src = currentTrack.url;
//       audioElement.current.play()
//         .then(() => setPlaying(true))
//         .catch((err) => console.error('Failed to play the song:', err));
//     }
//   }, [currentTrack]);

//   // ✅ Handle Play/Pause button
//   const handlePlayPause = () => {
//     if (audioElement.current) {
//       if (playing) {
//         audioElement.current.pause();
//       } else {
//         audioElement.current.play();
//       }
//       setPlaying(!playing);
//     }
//   };

//   // ✅ Handle track time updates
//   const updateTime = () => {
//     setElapsedTime(audioElement.current?.currentTime || 0);
//   };

//   // ✅ Handle track metadata loading
//   const loadMetadata = () => {
//     setTotalDuration(audioElement.current?.duration || 0);
//   };

//   // ✅ Format time to `mm:ss`
//   const formatDuration = (time) => {
//     const minutes = Math.floor(time / 60);
//     const seconds = Math.floor(time % 60);
//     return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
//   };

//   // ✅ Handle seeking in progress bar
//   const handleProgressBarClick = (e) => {
//     if (audioElement.current && totalDuration) {
//       const clickPosition = e.nativeEvent.offsetX;
//       const progressBarWidth = e.currentTarget.clientWidth;
//       const newTime = (clickPosition / progressBarWidth) * totalDuration;
//       audioElement.current.currentTime = newTime;
//       setElapsedTime(newTime);
//     }
//   };

//   // ✅ Check if current track is in favorites
//   const isFavorite = currentTrack && favorites.some((fav) => fav.id === currentTrack.id);

//   return (
//     <div className="fixed bottom-0 left-0 right-0 h-24 flex items-center justify-between px-8 border-t bg-gradient-to-r from-emerald-700 via-green-500 to-lime-400 shadow-lg">
//       {/* Audio Element */}
//       <audio
//         ref={audioElement}
//         onTimeUpdate={updateTime}
//         onLoadedMetadata={loadMetadata}
//       />

//       {/* ✅ Song Info */}
//       <div className="flex items-center space-x-3">
//         <img
//           src={currentTrack?.image || "https://img.icons8.com/?size=96&id=G9XXzb9XaEKX&format=png"}
//           alt="Album cover"
//           className="w-12 h-12 rounded"
//         />
//         <div>
//           <p className="text-sm font-semibold text-white">
//             {currentTrack?.title || "No Music Selected"}
//           </p>
//           <p className="text-xs text-white">
//             {currentTrack?.artist || "Unknown Artist"}
//           </p>
//         </div>
//       </div>

//       {/* ✅ Play/Pause and Progress Bar */}
//       <div className="flex-1 flex flex-col items-center">
//         <button
//           className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold"
//           onClick={handlePlayPause}
//         >
//           {playing ? '❚❚' : '▶'}
//         </button>

//         {/* ✅ Progress Bar */}
//         <div className="flex items-center space-x-2 mt-2 w-full max-w-md">
//           <span className="text-xs text-white">
//             {formatDuration(elapsedTime)}
//           </span>
//           <div
//             className="flex-1 h-1 bg-gray-300 rounded cursor-pointer"
//             onClick={handleProgressBarClick}
//           >
//             <div
//               className="h-full bg-green-500 rounded"
//               style={{
//                 width: totalDuration
//                   ? `${(elapsedTime / totalDuration) * 100}%`
//                   : '0%',
//               }}
//             ></div>
//           </div>
//           <span className="text-xs text-white">
//             {formatDuration(totalDuration)}
//           </span>
//         </div>
//       </div>

//       {/* ✅ Favorite Button */}
//       <button
//         onClick={() => currentTrack && toggleFavorite(currentTrack)}
//         className="text-2xl text-black w-12 h-12 flex items-center justify-center"
//       >
//         {isFavorite ? '❤️' : '🤍'}
//       </button>
//     </div>
//   );
// };

// export default MusicPlayer;







// import React, { useContext, useEffect, useRef, useState } from 'react';
// import { SearchContext } from '../UseContext/SearchContext';

// let globalAudioElement = null;

// const MusicPlayer = () => {
//   const {
//     currentTrack,
//     toggleFavorite,
//     favorites,
//   } = useContext(SearchContext);

//   const audioElement = useRef(null);
//   const [playing, setPlaying] = useState(false);
//   const [elapsedTime, setElapsedTime] = useState(0);
//   const [totalDuration, setTotalDuration] = useState(0);

//   // ✅ Handle playing new track
//   useEffect(() => {
//     if (currentTrack && audioElement.current) {
//       if (globalAudioElement && globalAudioElement !== audioElement.current) {
//         globalAudioElement.pause();
//       }
//       globalAudioElement = audioElement.current;
//       audioElement.current.src = currentTrack.url;
//       audioElement.current.play()
//         .then(() => setPlaying(true))
//         .catch((err) => console.error('Failed to play the song:', err));
//     }
//   }, [currentTrack]);

//   // ✅ Handle Play/Pause button
//   const handlePlayPause = () => {
//     if (audioElement.current) {
//       if (playing) {
//         audioElement.current.pause();
//       } else {
//         audioElement.current.play();
//       }
//       setPlaying(!playing);
//     }
//   };

//   // ✅ Handle track time updates
//   const updateTime = () => {
//     setElapsedTime(audioElement.current?.currentTime || 0);
//   };

//   // ✅ Handle track metadata loading
//   const loadMetadata = () => {
//     setTotalDuration(audioElement.current?.duration || 0);
//   };

//   // ✅ Format time to `mm:ss`
//   const formatDuration = (time) => {
//     const minutes = Math.floor(time / 60);
//     const seconds = Math.floor(time % 60);
//     return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
//   };

//   // ✅ Handle seeking in progress bar
//   const handleProgressBarClick = (e) => {
//     if (audioElement.current && totalDuration) {
//       const clickPosition = e.nativeEvent.offsetX;
//       const progressBarWidth = e.currentTarget.clientWidth;
//       const newTime = (clickPosition / progressBarWidth) * totalDuration;
//       audioElement.current.currentTime = newTime;
//       setElapsedTime(newTime);
//     }
//   };

//   // ✅ Check if current track is in favorites
//   const isFavorite = currentTrack && favorites.some((fav) => fav.id === currentTrack.id);

//   return (
//     <div className="fixed bottom-0 left-0 right-0 h-24 flex items-center justify-between px-8 border-t bg-gradient-to-r from-emerald-700 via-green-500 to-lime-400 shadow-lg">
//       {/* Audio Element */}
//       <audio
//         ref={audioElement}
//         onTimeUpdate={updateTime}
//         onLoadedMetadata={loadMetadata}
//       />

//       {/* ✅ Song Info */}
//       <div className="flex items-center space-x-3">
//         <img
//           src={currentTrack?.image || "https://img.icons8.com/?size=96&id=UpZw1qeZM751&format=png"}
//           alt="Album cover"
//           className="w-12 h-12 rounded"
//         />
//         <div>
//           <p className="text-sm font-semibold text-white">
//             {currentTrack?.title || "No Music Selected"}
//           </p>
//           <p className="text-xs text-white">
//             {currentTrack?.artist || "Unknown Artist"}
//           </p>
//         </div>
//       </div>

//       {/* ✅ Play/Pause and Progress Bar */}
//       <div className="flex-1 flex flex-col items-center">
//         <button
//           className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold"
//           onClick={handlePlayPause}
//         >
//           {playing ? '❚❚' : '▶'}
//         </button>

//         {/* ✅ Progress Bar */}
//         <div className="flex items-center space-x-2 mt-2 w-full max-w-md">
//           <span className="text-xs text-white">
//             {formatDuration(elapsedTime)}
//           </span>
//           <div
//             className="flex-1 h-1 bg-gray-300 rounded cursor-pointer"
//             onClick={handleProgressBarClick}
//           >
//             <div
//               className="h-full bg-green-500 rounded"
//               style={{
//                 width: totalDuration
//                   ? `${(elapsedTime / totalDuration) * 100}%`
//                   : '0%',
//               }}
//             ></div>
//           </div>
//           <span className="text-xs text-white">
//             {formatDuration(totalDuration)}
//           </span>
//         </div>
//       </div>

//       {/* ✅ Favorite Button */}
//       <button
//         onClick={() => currentTrack && toggleFavorite(currentTrack)}
//         className="text-2xl text-black w-12 h-12 flex items-center justify-center"
//       >
//         {isFavorite ? '❤️' : '🤍'}
//       </button>
//     </div>
//   );
// };

// export default MusicPlayer;




// responsive code 

import React, { useContext, useEffect, useRef, useState } from 'react';
import { SearchContext } from '../UseContext/SearchContext';

let globalAudioElement = null;

const MusicPlayer = () => {
  const { currentTrack, toggleFavorite, favorites } = useContext(SearchContext);

  const audioElement = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);

  useEffect(() => {
    if (currentTrack && audioElement.current) {
      if (globalAudioElement && globalAudioElement !== audioElement.current) {
        globalAudioElement.pause();
      }
      globalAudioElement = audioElement.current;
      audioElement.current.src = currentTrack.url;
      audioElement.current.play()
        .then(() => setPlaying(true))
        .catch((err) => console.error('Failed to play the song:', err));
    }
  }, [currentTrack]);

  const handlePlayPause = () => {
    if (audioElement.current) {
      if (playing) {
        audioElement.current.pause();
      } else {
        audioElement.current.play();
      }
      setPlaying(!playing);
    }
  };

  const updateTime = () => {
    setElapsedTime(audioElement.current?.currentTime || 0);
  };

  const loadMetadata = () => {
    setTotalDuration(audioElement.current?.duration || 0);
  };

  const formatDuration = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleProgressBarClick = (e) => {
    if (audioElement.current && totalDuration) {
      const clickPosition = e.nativeEvent.offsetX;
      const progressBarWidth = e.currentTarget.clientWidth;
      const newTime = (clickPosition / progressBarWidth) * totalDuration;
      audioElement.current.currentTime = newTime;
      setElapsedTime(newTime);
    }
  };

  const isFavorite = currentTrack && favorites.some((fav) => fav.id === currentTrack.id);

  return (
    <div className="fixed bottom-0 left-0 right-0 h-20 flex items-center justify-between px-4 md:px-8 border-t bg-gradient-to-r from-emerald-700 via-green-500 to-lime-400 shadow-lg">

      <audio
        ref={audioElement}
        onTimeUpdate={updateTime}
        onLoadedMetadata={loadMetadata}
      />

      <div className="flex items-center space-x-3 w-1/3 ml-4 md:ml-60">
        <img
          src={currentTrack?.image || "https://img.icons8.com/?size=96&id=UpZw1qeZM751&format=png"}
          alt="Album cover"
          className="w-10 h-10 rounded"
        />
        <div className="truncate">
          <p className="text-sm font-semibold text-white truncate">
            {currentTrack?.title || "No Music Selected"}
          </p>
          <p className="text-xs text-gray-200 truncate">
            {currentTrack?.artist || "Unknown Artist"}
          </p>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center max-w-md mr-4 md:mr-24 lg:mr-40 xl:mr-100">
        <button
          className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold hover:bg-green-600 transition"
          onClick={handlePlayPause}
        >
          {playing ? '❚❚' : '▶'}
        </button>

        <div className="flex items-center space-x-2 mt-2 w-full">
          <span className="text-xs text-white w-8 text-center">
            {formatDuration(elapsedTime)}
          </span>
          <div
            className="flex-1 h-1 bg-gray-300 rounded cursor-pointer"
            onClick={handleProgressBarClick}
          >
            <div
              className="h-full bg-green-500 rounded transition-all"
              style={{
                width: totalDuration
                  ? `${(elapsedTime / totalDuration) * 100}%`
                  : '0%',
              }}
            ></div>
          </div>
          <span className="text-xs text-white w-8 text-center">
            {formatDuration(totalDuration)}
          </span>
        </div>
      </div>

      <button
        onClick={() => currentTrack && toggleFavorite(currentTrack)}
        className="text-2xl w-10 h-10 flex items-center justify-center hover:bg-green-300 rounded transition"
      >
        {isFavorite ? '❤️' : '🤍'}
      </button>
    </div>
  );
};

export default MusicPlayer;