import React, { useEffect, useState } from 'react';
import '../App.css';
const Home = () => {
  const [videoId, setVideoId] = useState(null);
  const [buttonClicks, setButtonClicks] = useState(0);

  useEffect(() => {
    fetch('./northamerica').then((data) => {
      return data.json();
    }).then((obj) => {
      setVideoId(obj.data);
    });
  }, [buttonClicks]);

  const embedUrl = `https://www.youtube.com/embed/${videoId}`;
  const downloadUrl = `https://youtu.be/${videoId}`;

  const handleClick = (category) => {
    fetch(`./${category}`).then((data) => {
      return data.json();
    }).then((obj) => {
      setVideoId(obj.data);
      const watchedVideos = JSON.parse(localStorage.getItem('watchedVideos')) || [];
      watchedVideos.push(obj.data);
      localStorage.setItem('watchedVideos', JSON.stringify(watchedVideos));
    });
    setButtonClicks(buttonClicks + 1);
  };

  const categories = ['brazilian', 'japanese', 'northamerica', 'french', 'drumbreaks'];

  return (
    <div id="page-wrap">
      <h1>HOME PAGE</h1>
      <div style={{ padding: '10px' }}>
        <iframe
          id="ytvideo"
          width="860"
          height="455"
          src={embedUrl} // Update the src attribute dynamically
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        
      </div>
      <div id = "button-wrap">
      {categories.map((category) => (
          <button onClick={() => handleClick(category)} key={category}>
            {category}
          </button>
        ))}
      </div>
      <iframe
        title="downloadFrame"
        src={`http://convert2mp3s.com/api/single/mp3?url=${downloadUrl}`}
        width="32%"
        height="32%"
        allowtransparency="true"
        scrolling="no"
        style={{ border: 'none' }}
      ></iframe>
    </div>
  );
};

export default Home;
