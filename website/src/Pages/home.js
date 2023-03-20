import React, { useEffect, useState } from 'react';

const Home = () => {
  const [videoId, setVideoId] = useState(null);
  const [buttonClicks, setButtonClicks] = useState(0);

  useEffect(() => {
    fetch('./getRandomVideo').then((data) => {
      return data.json();
    }).then((obj) => {
      setVideoId(obj.data);
    });
  }, [buttonClicks]);

  const embedUrl = `https://www.youtube.com/embed/${videoId}`;
  const downloadUrl = `https://youtu.be/${videoId}`;

  const handleClick = () => {
    setButtonClicks(buttonClicks + 1);
  };

  return (
    <div id="page-wrap">
      <h1>HOME PAGE</h1>
      <div style={{ padding: '10px' }}>
        <iframe
          id="ytvideo"
          width="560"
          height="315"
          src={embedUrl} // Update the src attribute dynamically
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <button onClick={handleClick} style={{ fontSize: '1.2rem', padding: '10px 20px', backgroundColor: '#1f98ea', color: '#fff', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>Next Video</button>
        
      </div>
      <iframe
        title="downloadFrame"
        src={`http://convert2mp3s.com/api/single/mp3?url=${downloadUrl}`}
        width="50%"
        height="50%"
        allowtransparency="true"
        scrolling="no"
        style={{ border: 'none' }}
      ></iframe>

    </div>
  );
};

export default Home;
