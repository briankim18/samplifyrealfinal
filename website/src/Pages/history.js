import React, { useState, useEffect } from 'react';

const History = () => {
  const [videoIds, setVideoIds] = useState([]);

  useEffect(() => {
    const history = JSON.parse(localStorage.getItem('history')) || [];
    setVideoIds(history);
  }, []);

  const handleClearHistory = () => {
    localStorage.removeItem('history');
    setVideoIds([]);
  };

  return (
    <div id="page-wrap">
      <h1>History</h1>
      {videoIds.length === 0 ? (
        <p>No videos watched yet.</p>
      ) : (
        <>
          <ul>
            {videoIds.map((videoId) => (
              <li key={videoId}>
                <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </li>
            ))}
          </ul>
          <button onClick={handleClearHistory}>Clear History</button>
        </>
      )}
    </div>
  );
};

export default History;

// import React, { useEffect, useState } from 'react';

// const History = () => {
//   const [videoIds, setVideoIds] = useState([]);

//   useEffect(() => {
//     fetch('./getVideoIds').then((data) => {
//       return data.json();
//     }).then((obj) => {
//       setVideoIds(obj.data);
//     });
//   }, []);

//   return (
//     <div>
//       <h1>This will show history!</h1>
//       {videoIds.map((videoId) => {
//         const embedUrl = `https://www.youtube.com/embed/${videoId}`;
//         return (
//           <div key={videoId}>
//             <iframe
//               width="560"
//               height="315"
//               src={embedUrl}
//               title="YouTube video player"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default History;


// import '../App.css';
// import React,{useEffect, useState} from 'react';


// const Home = () => {
//   const [videoId, setVideoID] = useState(null);
//   console.log("sent");
//   useEffect(() =>{
//     fetch("./getRandomVideo").then(function(data){
//       console.log(data);
//       console.log("received");
//       return data.json();
//     }).then(function(obj){
//       console.log("2nd then");
//       console.log(obj);
//       setVideoID(obj.data);
//     });
//   },[])
//   const embedUrl = `https://www.youtube.com/embed/${videoId}`;
//   const downloadUrl = `https://youtu.be/${videoId}`;
  
//   return (
//     <div id = "page-wrap">
//     { <>
//       <h1>HOME PAGE</h1>
//       <div style={{padding: '10px'}}>
//       <iframe
//             id="ytvideo"
//             width="560"
//             height="315"
//             src={embedUrl} // Update the src attribute dynamically
//             title="YouTube video player"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           ></iframe>
//       </div>

//       <iframe title="downloadFrame" src={`http://convert2mp3s.com/api/single/mp3?url=${downloadUrl}`}
//         width="50%" height="50%" allowtransparency="true" scrolling="no" style={{ border: 'none' }}></iframe></>
//     }
//   </div>
//   );
// };
  
// export default Home;