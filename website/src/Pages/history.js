import React from 'react';

const History = () => {
  const watchedVideos = JSON.parse(localStorage.getItem('watchedVideos')) || [];

  const handleClearHistory = () => {
    localStorage.removeItem('watchedVideos');
    window.location.reload(); // reload the page to reflect the changes
  };

  return (
    <div id="page-wrap">
      <h1>WATCHED VIDEOS</h1>
      {watchedVideos.map((videoId) => (
        <div key={videoId} style={{ padding: '10px' }}>
          <iframe
            id="ytvideo"
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ))}
      {watchedVideos.length > 0 && (
        <button onClick={handleClearHistory} style={{ fontSize: '1.2rem', padding: '10px 20px', backgroundColor: '#1f98ea', color: '#fff', borderRadius: '5px', border: 'none', cursor: 'pointer', marginTop: '20px' }}>Clear History</button>
      )}
    </div>
  );
};

export default History;




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