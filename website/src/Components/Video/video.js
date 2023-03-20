import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { google } from 'googleapis';

const Video = () => {
  const [videoUrl, setVideoUrl] = useState('');

  useEffect(() => {
    const getVideoUrl = async () => {
      const apiKey = 'AIzaSyCPGGs_J3MRTua_lQzZY1XU-psbFWDulio';
      const youtube = google.youtube({
        version: 'v3',
        auth: apiKey,
      });
      const playlistId = 'PLIFvAFwE4igVcNgN5yIuFhfm4OU6d5WLa';
      const response = await youtube.playlistItems.list({
        part: 'snippet',
        playlistId: playlistId,
        maxResults: 50,
      });
      const videoIds = response.data.items.map((item) => item.snippet.resourceId.videoId);
      const randomIndex = Math.floor(Math.random() * videoIds.length);
      const randomVideoId = videoIds[randomIndex];
      const embedUrl = `https://www.youtube.com/embed/${randomVideoId}`;
      setVideoUrl(embedUrl);
    };
    getVideoUrl();
  }, []);

  return (
    <div>
    </div>
  );
};

export default Video;