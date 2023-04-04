import React from 'react';
import '../App.css';
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const History = () => {
  const watchedVideos = JSON.parse(localStorage.getItem('watchedVideos')) || [];

  const handleClearHistory = () => {
    localStorage.removeItem('watchedVideos');
    window.location.reload(); // reload the page to reflect the changes
  };

  // reverse the order of watchedVideos
  const reversedWatchedVideos = watchedVideos.slice().reverse();

  return (
    <div id="page-wrap" className="history-page" style={{ paddingTop: '50px', paddingLeft: '200px'}}>
      {watchedVideos.length > 0 && (
          <div className="history-toolbar-right">
            <button className="clear-history-button" onClick={handleClearHistory}>Clear History</button>
          </div>
        )}
      <h1 className="history-heading">History</h1>
      <div className="history-toolbar">
      </div>
      {watchedVideos.length === 0 && (
        <div className="no-videos">
          <p>No videos to be displayed</p>
          <Link className="history-link" to="/">Explore More</Link>
        </div>
      )}
      {watchedVideos.length > 0 && (
        <div className="history-videos-container video-row">
          {reversedWatchedVideos.map((videoId) => (
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

                <button
                  onClick={() => {
                    const updatedHistory = watchedVideos.filter((id) => id !== videoId);
                    localStorage.setItem('watchedVideos', JSON.stringify(updatedHistory));
                    window.location.reload();
                  }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 35,
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

export default History;
