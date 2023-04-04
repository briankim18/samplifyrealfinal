import React, { useState, useEffect, useCallback } from 'react';
import '../App.css';

const Chopify = () => {
  const [currentAudio, setCurrentAudio] = useState(null);
  const [activeButton, setActiveButton] = useState(null);

  const audioFiles = [
    '/Samples/audio1.wav',
    '/Samples/audio2.wav',
    '/Samples/audio3.wav',
    '/Samples/audio4.wav',
    '/Samples/audio5.wav',
    '/Samples/audio6.wav',
  ];

  const playAudio = (audioFile, index) => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    const newAudio = new Audio(audioFile);
    setCurrentAudio(newAudio);

    setActiveButton(index);
    newAudio.play();
    newAudio.addEventListener('ended', () => setActiveButton(null));
  };

  const buttonStyle = (index) => ({
    backgroundColor: activeButton === index ? 'lightblue' : '',
    transition: 'background-color 0.1s ease-out',
    width: '100px',
    height: '100px',
  });

  const handleKeyPress = useCallback(
    (event) => {
      const key = parseInt(event.key);
      if (key >= 1 && key <= 6) {
        playAudio(audioFiles[key - 1], key - 1);
      }
    },
    [audioFiles]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div id="page-wrap" style={{ paddingTop: '50px', paddingLeft: '200px' }}>
      <h1>Chopify</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'repeat(2, 1fr)',
          gridGap: '20px',
        }}
      >
        {audioFiles.map((audioFile, index) => (
          <button
            key={index}
            style={buttonStyle(index)}
            onClick={() => playAudio(audioFile, index)}
            onMouseUp={() => setActiveButton(null)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Chopify;
