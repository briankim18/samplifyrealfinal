const express = require('express');
//const axios = require('axios');
const {
    google
} = require('googleapis');
const app = express();
const port = 8080;
const apiKey = "AIzaSyCPGGs_J3MRTua_lQzZY1XU-psbFWDulio";
//const baseApiUrl = "https://www.googleapis.com/youtube/v3";
const youtube = google.youtube({
    version: "v3",
    auth: apiKey,
});
// app.get("/", (req, res) => {
//     res.send("Hello from api");
// });

// })
app.get("/japanese", async (req, res, next) => {
    console.log("received");

    try {
        const playlistId = "PLIFvAFwE4igVcNgN5yIuFhfm4OU6d5WLa"
        const response = await youtube.playlistItems.list({
            part: "snippet",
            playlistId: playlistId,
            maxResults: 50,
        });
        const videoIds = response.data.items.map((item) => item.snippet.resourceId.videoId);
        // Choose a random video ID from the array
        const randomIndex = Math.floor(Math.random() * videoIds.length);
        const randomVideoId = videoIds[randomIndex];

        // Fetch the video details
        const videoDetailsResponse = await youtube.videos.list({
            part: "snippet",
            id: randomVideoId,
        });
        const videoDetails = videoDetailsResponse.data.items[0].snippet;

        // Set the state to the chosen video ID and description
        const video = {
            id: randomVideoId,
            title: videoDetails.title,
            description: videoDetails.description,
        };

        const embedUrl = `https://www.youtube.com/embed/${randomVideoId}`;
        const iframeHtml = `<iframe width="560" height="315" src="${embedUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

        res.writeHead(200, {'Content-type': 'application/json'});

        let obj = {
            status: "OK", 
            data: video
        }
        res.end(JSON.stringify(obj));

    } catch (err) {
        next(err);
    }
});
app.get("/northamerica", async (req, res, next) => {
    console.log("received");

    try {
        const playlistId = "PLIFvAFwE4igVcNgN5yIuFhfm4OU6d5WLa"
        const response = await youtube.playlistItems.list({
            part: "snippet",
            playlistId: playlistId,
            maxResults: 50,
        });
        const videoIds = response.data.items.map((item) => item.snippet.resourceId.videoId);
        // Choose a random video ID from the array
        const randomIndex = Math.floor(Math.random() * videoIds.length);
        const randomVideoId = videoIds[randomIndex];

        // Fetch the video details
        const videoDetailsResponse = await youtube.videos.list({
            part: "snippet",
            id: randomVideoId,
        });
        const videoDetails = videoDetailsResponse.data.items[0].snippet;

        // Set the state to the chosen video ID and description
        const video = {
            id: randomVideoId,
            title: videoDetails.title,
            description: videoDetails.description,
        };

        const embedUrl = `https://www.youtube.com/embed/${randomVideoId}`;
        const iframeHtml = `<iframe width="560" height="315" src="${embedUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

        res.writeHead(200, {'Content-type': 'application/json'});

        let obj = {
            status: "OK", 
            data: video
        }
        res.end(JSON.stringify(obj));

    } catch (err) {
        next(err);
    }
});
app.get("/brazilian", async (req, res, next) => {
    console.log("received");

    try {
        const playlistId = "PLIFvAFwE4igVcNgN5yIuFhfm4OU6d5WLa"
        const response = await youtube.playlistItems.list({
            part: "snippet",
            playlistId: playlistId,
            maxResults: 50,
        });
        const videoIds = response.data.items.map((item) => item.snippet.resourceId.videoId);
        // Choose a random video ID from the array
        const randomIndex = Math.floor(Math.random() * videoIds.length);
        const randomVideoId = videoIds[randomIndex];

        // Fetch the video details
        const videoDetailsResponse = await youtube.videos.list({
            part: "snippet",
            id: randomVideoId,
        });
        const videoDetails = videoDetailsResponse.data.items[0].snippet;

        // Set the state to the chosen video ID and description
        const video = {
            id: randomVideoId,
            title: videoDetails.title,
            description: videoDetails.description,
        };

        const embedUrl = `https://www.youtube.com/embed/${randomVideoId}`;
        const iframeHtml = `<iframe width="560" height="315" src="${embedUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

        res.writeHead(200, {'Content-type': 'application/json'});

        let obj = {
            status: "OK", 
            data: video
        }
        res.end(JSON.stringify(obj));

    } catch (err) {
        next(err);
    }
});
app.get("/french", async (req, res, next) => {
    console.log("received");

    try {
        const playlistId = "PLIFvAFwE4igVcNgN5yIuFhfm4OU6d5WLa"
        const response = await youtube.playlistItems.list({
            part: "snippet",
            playlistId: playlistId,
            maxResults: 50,
        });
        const videoIds = response.data.items.map((item) => item.snippet.resourceId.videoId);
        // Choose a random video ID from the array
        const randomIndex = Math.floor(Math.random() * videoIds.length);
        const randomVideoId = videoIds[randomIndex];

        // Fetch the video details
        const videoDetailsResponse = await youtube.videos.list({
            part: "snippet",
            id: randomVideoId,
        });
        const videoDetails = videoDetailsResponse.data.items[0].snippet;

        // Set the state to the chosen video ID and description
        const video = {
            id: randomVideoId,
            title: videoDetails.title,
            description: videoDetails.description,
        };

        const embedUrl = `https://www.youtube.com/embed/${randomVideoId}`;
        const iframeHtml = `<iframe width="560" height="315" src="${embedUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

        res.writeHead(200, {'Content-type': 'application/json'});

        let obj = {
            status: "OK", 
            data: video
        }
        res.end(JSON.stringify(obj));

    } catch (err) {
        next(err);
    }
});
app.get("/drumbreaks", async (req, res, next) => {
    console.log("received");

    try {
        const playlistId = "PLIFvAFwE4igVcNgN5yIuFhfm4OU6d5WLa"
        const response = await youtube.playlistItems.list({
            part: "snippet",
            playlistId: playlistId,
            maxResults: 50,
        });
        const videoIds = response.data.items.map((item) => item.snippet.resourceId.videoId);
        // Choose a random video ID from the array
        const randomIndex = Math.floor(Math.random() * videoIds.length);
        const randomVideoId = videoIds[randomIndex];

        // Fetch the video details
        const videoDetailsResponse = await youtube.videos.list({
            part: "snippet",
            id: randomVideoId,
        });
        const videoDetails = videoDetailsResponse.data.items[0].snippet;

        // Set the state to the chosen video ID and description
        const video = {
            id: randomVideoId,
            title: videoDetails.title,
            description: videoDetails.description,
        };

        const embedUrl = `https://www.youtube.com/embed/${randomVideoId}`;
        const iframeHtml = `<iframe width="560" height="315" src="${embedUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

        res.writeHead(200, {'Content-type': 'application/json'});

        let obj = {
            status: "OK", 
            data: video
        }
        res.end(JSON.stringify(obj));

    } catch (err) {
        next(err);
    }
});


app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
}); 