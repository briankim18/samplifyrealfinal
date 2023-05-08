import React from 'react';
import '../App.css';
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
  
const Favorites = () => {

  const likedVideos = JSON.parse(localStorage.getItem('likedVideos')) || [];
  const handleLikes = () => {
    localStorage.removeItem('likedVideos');
    window.location.reload(); // reload the page to reflect the changes
  };

  // reverse the order of likedVideos
  const reversedLikedVideos = likedVideos.slice().reverse();

  return (
    <div id="page-wrap" className="pages" style={{width: '100%', minHeight: '100vh', paddingTop: '1px', paddingLeft: '200px'}}>
      {likedVideos.length > 0 && (
          <div className="history-toolbar-right">
            <button className="clear-history-button" onClick={handleLikes} style={{ marginTop : '10px' }}>
              Clear Favorites</button>
          </div>
        )}
      <h1 style={{ textAlign: 'center', marginBottom: '20px'}}>FAVORITES</h1>
      <div className="history-toolbar">
      </div>
      {likedVideos.length === 0 && (
        <div className="no-videos">
          <p>No videos to be displayed</p>
          <Link className="history-link" to="/">Explore More</Link>
        </div>
      )}
      {likedVideos.length > 0 && (
        <div className="history-videos-container video-row">
    {reversedLikedVideos.map((videoId) => (	
    <div key={videoId} className="video-container" style={{ padding: '10px' }}>
    <div style={{ position: 'relative' }}>
      <iframe
          id="ytvideo"	
          width="305"
          height="172"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <button onClick={() => {
          const updatedLikedVideos = likedVideos.filter((id) => id !== videoId);
          localStorage.setItem('likedVideos', JSON.stringify(updatedLikedVideos));
          window.location.reload();	
        }}	
        style={{	
          position: 'absolute',	
          top: 0,	
        }}> <FaTrashAlt /> 
        </button>
      </div>
    </div>
  ))}
</div>
)}
</div>
);
};
  
export default Favorites;
