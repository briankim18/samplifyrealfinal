import React, { useEffect, useState } from 'react';
import '../App.css';
import { FaRegHeart, FaHeart } from "react-icons/fa";

const Home = () => {
  //right now this is just making the same video the default sample
  const [videoId, setVideoId] = useState("9fr3KUNpx4U");
  const [buttonClicks] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [videoDetails, setVideoDetails] = useState({});
  const apiKey = "AIzaSyCPGGs_J3MRTua_lQzZY1XU-psbFWDulio";

  useEffect(() => {
    fetch('./northamerica').then((data) => {
      return data.json();
    }).then((obj) => {
      setVideoDetails(obj.items[0].snippet);
    });
  }, [buttonClicks]);

  useEffect(() => {
    if (videoId) {
      fetch(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet&key=${apiKey}`)
        .then((data) => {
          return data.json();
        }).then((obj) => {
          setVideoDetails(obj.items[0].snippet);
        });
    }
  }, [videoId]);

  const embedUrl = `https://www.youtube.com/embed/${videoId}`;
  const downloadUrl = `https://youtu.be/${videoId}`;

  const handleClick = (category) => {
    setSelectedCategory(category);
    fetch(`./${category}`).then((data) => {
      return data.json();
    }).then((obj) => {
      setVideoId(obj.data);
      const watchedVideos = JSON.parse(localStorage.getItem('watchedVideos')) || [];
      watchedVideos.push(obj.data);
      localStorage.setItem('watchedVideos', JSON.stringify(watchedVideos));
      setIsLiked(localStorage.getItem('likedVideos')?.includes(obj.data));
    });
  };

  const handleSubmit = () => {
    handleClick(selectedCategory);
  };

  const handleLike = (videoId) => {
    const likedVideos = JSON.parse(localStorage.getItem('likedVideos')) || [];
    const index = likedVideos.indexOf(videoId);
    if (index === -1) {
      // Video is not yet liked, add it to the list
      likedVideos.push(videoId);
      localStorage.setItem('likedVideos', JSON.stringify(likedVideos));
      setIsLiked(true);
    } else {
      // Video is already liked, remove it from the list
      likedVideos.splice(index, 1);
      localStorage.setItem('likedVideos', JSON.stringify(likedVideos));
      setIsLiked(false);
    }
  };

  const [selectedCategory, setSelectedCategory] = useState('brazilian');

  const categories = ['brazilian', 'japanese', 'northamerica', 'french', 'drumbreaks'];

  return (
    <div id="page-wrap" div style={{ paddingTop: '1px', paddingLeft: '200px'}}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px'}}>HOME PAGE</h1>      <div style={{ padding: '10px' }}>
        <iframe
          id="ytvideo"
          width="700"
          height="350"
          src={embedUrl} // Update the src attribute dynamically
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div style={{marginLeft: '120px', marginRight: '120px'}}>
          <p>{videoDetails.description}</p>
        </div>
      </div>
      <div id="select">
        <label htmlFor="category" style={{ paddingRight: '10px' }}>
          Select a category:
        </label>
        <select id="category">
          {categories.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>
        <button onClick={handleSubmit} style={{ marginLeft: '10px' }}>
          Submit
        </button>
        <button onClick={() => handleLike(videoId)} style={{ marginLeft: '10px' }}>
          {isLiked ? <FaHeart color="red" /> : <FaRegHeart />}
        </button>
      </div>
      <div style={{ padding: '20px' }}>
        <iframe
          id="download-frame"
          title="downloadFrame"
          src={`http://convert2mp3s.com/api/single/mp3?url=${downloadUrl}`}
          width="700"
          height="100"
          allowtransparency="true"
          scrolling="no"
          style={{ border: 'none'}}>
        </iframe>
      </div>
    </div>
  );
};

export default Home;