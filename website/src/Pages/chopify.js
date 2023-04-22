import React, { useState, useEffect, useCallback } from 'react';
import Slider from 'react-slider';
import '../App.css';
import { FaWrench } from "react-icons/fa";

const Chopify = () => {
  const [currentAudio, setCurrentAudio] = useState(null);
  const [activeButton, setActiveButton] = useState(null);
  const [selectedWaveform, setSelectedWaveform] = useState(null);
  const [regionData, setRegionData] = useState([]);

  //const audioRef = useRef(null);

  const audioFiles = React.useMemo(() => [
    new Audio('/Samples/1_0.30.wav'),
    new Audio('/Samples/2_1.06.wav'),
    new Audio('/Samples/3_3.02.wav'),
    new Audio('/Samples/4_3.05.wav'),
    new Audio('/Samples/5_3.07.wav'),
    new Audio('/Samples/6_3.10.wav'),
  ], []);
  
  audioFiles.forEach((audio, index) => {
    audio.preload = 'auto';
    audio.addEventListener('error', (error) => {
      console.error(`Error loading audio file ${index + 1}:`, error);
    });
  });
  

  const playAudio = React.useCallback((audioFile, index) => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
  
    const newAudio = audioFile;
    setCurrentAudio(newAudio);
  
    setActiveButton(index);
    newAudio.play();
    newAudio.addEventListener('ended', () => setActiveButton(null));
  }, [currentAudio, setActiveButton]);

  const stopAudio = useCallback(() => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      setActiveButton(null);
    }
  }, [currentAudio, setActiveButton]);
  

  const handleWrenchClick = (index) => {
    if (selectedWaveform === index) {
      setSelectedWaveform(null);
      setShowSlider(false);
    } else {
      setSelectedWaveform(index);
      setShowSlider(true);
    }
  };

  const [showSlider, setShowSlider] = useState(false);

  const handleSave = () => {
    setShowSlider(false);
  };

/*   const resetRegions = () => {
    setRegionData(Array(audioFiles.length).fill(null));
  }; */

  const buttonStyle = (index) => ({
    backgroundColor: activeButton === index ? 'lightblue' : '',
    transition: 'background-color 0.1s ease-out',
    width: '100px',
    height: '100px',
  });
  

  useEffect(() => {
    const handleRegionUpdate = () => {
      if (currentAudio && selectedWaveform !== null && regionData[selectedWaveform]) {
        const { start, end } = regionData[selectedWaveform];
  
        if (currentAudio.currentTime >= end) {
          currentAudio.pause();
          currentAudio.currentTime = start;
          currentAudio.play();
        }
      }
    };
  
    if (currentAudio) {
      currentAudio.addEventListener('timeupdate', handleRegionUpdate);
    }
  
    return () => {
      if (currentAudio) {
        currentAudio.removeEventListener('timeupdate', handleRegionUpdate);
      }
    };
  }, [currentAudio, selectedWaveform, regionData]);
  

  //const [sliderValues, setSliderValues] = useState([0, 360]);

  const handleSliderChange = (values) => {
    const newRegionData = [...regionData];
    newRegionData[selectedWaveform] = { start: values[0], end: values[1] };
    setRegionData(newRegionData);
  };
  
  const convertSliderValueToTime = (value) => {
    const minutes = Math.floor(value / 60);
    const seconds = value % 60;
    return `${minutes}:${String(seconds).padStart(2, '0')}`;
  };

  // New state for drum loop
  const [loopingDrums, setLoopingDrums] = useState({
    drum1: null,
    drum2: null,
    drum3: null,
  });

  // New function for toggling drum loops
  const toggleDrumLoop = (drumKey, audioPath) => {
    if (loopingDrums[drumKey]) {
      loopingDrums[drumKey].pause();
      loopingDrums[drumKey].currentTime = 0;
      setLoopingDrums({ ...loopingDrums, [drumKey]: null });
    } else {
      const drumLoop = new Audio(audioPath);
      drumLoop.loop = true;
      drumLoop.play();
      setLoopingDrums({ ...loopingDrums, [drumKey]: drumLoop });
    }
  };

  return (
    <div id="page-wrap" style={{ paddingTop: '1px', paddingLeft: '200px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px'}}>CHOPIFY</h1>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/0Xsdji5ht2Y"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, auto)',
          gridTemplateRows: 'repeat(2, auto)',
          justifyContent: 'center',
          gap: '50px',
          marginBottom: '20px',
        }}
      >
        {audioFiles.map((audioFile, index) => (
          <div key={index} style={{ textAlign: 'center', margin: '10px' }}>
            <button
              style={buttonStyle(index)}
              onClick={() => {
                playAudio(audioFile, index);
              }}
              onMouseUp={() => setActiveButton(null)}
            >
              {index + 1}
            </button>
            <br />
            <button
              style={{ width: '50px', height: '50px', marginTop: '10px' }}
              onClick={() => handleWrenchClick(index)}
            >
              <FaWrench />
            </button>
            {selectedWaveform === index && showSlider && (
              <div style={{ paddingTop: '20px' }}>
                <Slider
                  className="horizontal-slider"
                  min={0}
                  max={360}
                  value={regionData[selectedWaveform]
                    ? [regionData[selectedWaveform].start, regionData[selectedWaveform].end]
                    : [0, 360]}
                  onChange={handleSliderChange}
                  pearling
                  minDistance={1}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>
                    {regionData[selectedWaveform]
                      ? convertSliderValueToTime(regionData[selectedWaveform].start)
                      : "0:00"}
                  </span>
                  <span>
                    {regionData[selectedWaveform]
                      ? convertSliderValueToTime(regionData[selectedWaveform].end)
                      : "6:00"}
                  </span>
                </div>
                <button onClick={handleSave}>Save</button>
              </div>
            )}
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '20px' }}>
        <button onClick={stopAudio}>Stop</button>
      </div>
      {/* New drum buttons */}
      <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '20px' }}>
  <button
    className={`drum-button`}
    onClick={() => toggleDrumLoop('drum1', '/Samples/143bpm.wav')}
    style={{ marginRight: '10px', backgroundColor: loopingDrums.drum1 ? 'lightblue' : '' }}
  >
    Drumbeat 1
  </button>
  <button
    className={`drum-button`}
    onClick={() => toggleDrumLoop('drum2', '/Samples/drumloop2.wav')} // Replace with the correct path for drumbeat 2
    style={{ marginRight: '10px', backgroundColor: loopingDrums.drum2 ? 'lightblue' : '' }}
  >
    Drumbeat 2
  </button>
  <button
    className={`drum-button`}
    onClick={() => toggleDrumLoop('drum3', '/Samples/drumbeat2.wav')} // Replace with the correct path for drumbeat 3
    style={{ backgroundColor: loopingDrums.drum3 ? 'lightblue' : '' }}
  >
    Drumbeat 3
  </button>
</div>

</div>
);
};

export { Chopify as default };
