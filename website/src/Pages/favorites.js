import React from 'react';
import '../App.css';
import { FaTrashAlt } from "react-icons/fa";
  
const Favorites = () => {

  const likedVideos = JSON.parse(localStorage.getItem('likedVideos')) || [];
  const handleLikes = () => {
    localStorage.removeItem('likedVideos');
    window.location.reload(); // reload the page to reflect the changes
  };

  // reverse the order of likedVideos
  const reversedLikedVideos = likedVideos.slice().reverse();

  return (
    <div id="page-wrap" div style={{ paddingTop: '50px', paddingLeft: '200px'}}>
      <h1>FAVORITES</h1>
      {likedVideos.length === 0 && (
        "No videos to be displayed"
      )}
      {likedVideos.length > 0 && (
        <button onClick={handleLikes} >Clear Favorites</button>
      )}
    {reversedLikedVideos.map((videoId) => (
      <div>
        <div key={videoId} style={{ padding: '20px', textAlign: 'center' }}>
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
      <button onClick={() => {
          const updatedLikedVideos = likedVideos.filter((id) => id !== videoId);
          localStorage.setItem('likedVideos', JSON.stringify(updatedLikedVideos));
          window.location.reload();
        }}>  <FaTrashAlt /> </button>
      </div>
    ))}
    </div>
  );
};
  
export default Favorites;
