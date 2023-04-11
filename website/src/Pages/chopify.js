import React, { useState, useEffect, useRef, useCallback } from 'react';
import '../App.css';
import WaveSurfer from 'wavesurfer.js';
import RegionsPlugin from 'wavesurfer.js/dist/plugin/wavesurfer.regions.min.js';

const Chopify = () => {
  const [currentAudio, setCurrentAudio] = useState(null);
  const [activeButton, setActiveButton] = useState(null);
  const [selectedWaveform, setSelectedWaveform] = useState(null);
  const [regionData, setRegionData] = useState([]);

  const waveformRef = useRef(null);
  const waveformContainerRef = useRef(null);

  const audioFiles = React.useMemo(() => [
    '/Samples/audio1.wav',
    '/Samples/audio2.wav',
    '/Samples/audio3.wav',
    '/Samples/audio4.wav',
    '/Samples/audio5.wav',
    '/Samples/audio6.wav',
  ], []);

  const playAudio = React.useCallback((audioFile, index) => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    const newAudio = new Audio(audioFile);
    setCurrentAudio(newAudio);

    setActiveButton(index);
    newAudio.play();
    newAudio.addEventListener('ended', () => setActiveButton(null));
  }, [currentAudio, setActiveButton]);

  const stopAudio = () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      setActiveButton(null);
    }
  };

  const handleWrenchClick = (index) => {
    setSelectedWaveform(index);
    if (waveformRef.current) {
      waveformRef.current.load(audioFiles[index]);
    }
  };

  const handleRegionUpdate = (region) => {
    if (currentAudio && selectedWaveform !== null) {
      setRegionData((prevData) => {
        const newData = [...prevData];
        newData[selectedWaveform] = { start: region.start, end: region.end };
        return newData;
      });

      currentAudio.currentTime = region.start;
      currentAudio.play();
      setTimeout(() => {
        stopAudio();
      }, (region.end - region.start) * 1000);
    }
  };

  const resetRegions = () => {
    setRegionData(Array(audioFiles.length).fill(null));
  };

  const buttonStyle = (index) => ({
    backgroundColor: activeButton === index ? 'lightblue' : '',
    transition: 'background-color 0.1s ease-out',
    width: '100px',
    height: '100px',
  });

  const handleKeyPress = useCallback(
  (event) => {
    const key = event.key;
    if (key >= '1' && key <= '6') {
      playAudio(audioFiles[key - 1], key - 1);
      handleWrenchClick(key - 1);
    } else if (key === 's') {
      stopAudio();
    }
  },
  [audioFiles, playAudio, handleWrenchClick]
);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

    useEffect(() => {
  if (waveformContainerRef.current) {
    if (waveformRef.current) {
      waveformRef.current.destroy();
    }

    waveformRef.current = WaveSurfer.create({
      container: waveformContainerRef.current,
      waveColor: 'violet',
      progressColor: 'purple',
      cursorColor: 'navy',
      hideScrollbar: true,
      height: 80,
      plugins: [RegionsPlugin.create()],
    });

    if (selectedWaveform !== null) {
      waveformRef.current.load(audioFiles[selectedWaveform]);

      // Load the region for the current waveform if it exists
      waveformRef.current.on("ready", () => {
        waveformRef.current.clearRegions();
        if (regionData[selectedWaveform]) {
          waveformRef.current.addRegion(regionData[selectedWaveform]);
        }
      });
    }

    // Add a listener for region updates
    waveformRef.current.on('region-update-end', handleRegionUpdate);
  }
  return () => {
    if (waveformRef.current) {
      waveformRef.current.un('region-update-end', handleRegionUpdate);
    }
  };
}, [selectedWaveform, regionData]);

    return (
    <div id="page-wrap" style={{ paddingTop: '50px', paddingLeft: '200px' }}>
      <h1>Chopify</h1>
      <div ref={waveformContainerRef} style={{ marginBottom: '20px' }}></div>
      <div
        style={{
          display: 'grid',
          paddingLeft: '200px',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'repeat(2, 1fr)',
          gridGap: '20px',
        }}
      >
        {audioFiles.map((audioFile, index) => (
          <div key={index}>
            <button
              style={buttonStyle(index)}
              onClick={() => {
              playAudio(audioFile, index);
              handleWrenchClick(index);
              }}
            onMouseUp={() => setActiveButton(null)}
              >
              {index + 1}
            </button>
            <br />
            <button
              style={{ width: '50px', height: '50px' }}
              onClick={() => handleWrenchClick(index)}
            >
              🛠️
            </button>
          </div>
        ))}
      </div>
      <div style={{ paddingTop: '20px' }}>
        <button onClick={stopAudio}>Stop</button>
        <button onClick={resetRegions}>Reset</button>
      </div>
    </div>
  );
};

export { Chopify as default };


