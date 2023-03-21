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

        // Set the state to the chosen video ID
        // videoIds = randomVideoId;
        // res.send(randomVideoId);
        const embedUrl = `https://www.youtube.com/embed/${randomVideoId}`;
        const iframeHtml = `<iframe width="560" height="315" src="${embedUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        //res.send(randomVideoId);

        res.writeHead(200, {'Content-type': 'application/json'});

        let obj = {
            status: "OK", 
            data: randomVideoId
        }
        res.end(JSON.stringify(obj));

    } catch (err) {
        next(err);
    }
});
app.get("/northamerica", async (req, res, next) => {
    console.log("received");

    try {
        const playlistId = "PLIFvAFwE4igXUGBFwwYjcL08X5HhDBzZL"
        const response = await youtube.playlistItems.list({
            part: "snippet",
            playlistId: playlistId,
            maxResults: 50,
        });
        const videoIds = response.data.items.map((item) => item.snippet.resourceId.videoId);
        // Choose a random video ID from the array
        const randomIndex = Math.floor(Math.random() * videoIds.length);
        const randomVideoId = videoIds[randomIndex];

        // Set the state to the chosen video ID
        // videoIds = randomVideoId;
        // res.send(randomVideoId);
        const embedUrl = `https://www.youtube.com/embed/${randomVideoId}`;
        const iframeHtml = `<iframe width="560" height="315" src="${embedUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        //res.send(randomVideoId);

        res.writeHead(200, {'Content-type': 'application/json'});

        let obj = {
            status: "OK", 
            data: randomVideoId
        }
        res.end(JSON.stringify(obj));

    } catch (err) {
        next(err);
    }
});
app.get("/brazilian", async (req, res, next) => {
    console.log("received");

    try {
        const playlistId = "PLIFvAFwE4igW1rIkBc4Qkh8CspebK5cYE"
        const response = await youtube.playlistItems.list({
            part: "snippet",
            playlistId: playlistId,
            maxResults: 50,
        });
        const videoIds = response.data.items.map((item) => item.snippet.resourceId.videoId);
        // Choose a random video ID from the array
        const randomIndex = Math.floor(Math.random() * videoIds.length);
        const randomVideoId = videoIds[randomIndex];

        // Set the state to the chosen video ID
        // videoIds = randomVideoId;
        // res.send(randomVideoId);
        const embedUrl = `https://www.youtube.com/embed/${randomVideoId}`;
        const iframeHtml = `<iframe width="560" height="315" src="${embedUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        //res.send(randomVideoId);

        res.writeHead(200, {'Content-type': 'application/json'});

        let obj = {
            status: "OK", 
            data: randomVideoId
        }
        res.end(JSON.stringify(obj));

    } catch (err) {
        next(err);
    }
});
app.get("/french", async (req, res, next) => {
    console.log("received");

    try {
        const playlistId = "PLv_zZlDI6bKi-9HxGETVyMtdtCTI__Iqk"
        const response = await youtube.playlistItems.list({
            part: "snippet",
            playlistId: playlistId,
            maxResults: 50,
        });
        const videoIds = response.data.items.map((item) => item.snippet.resourceId.videoId);
        // Choose a random video ID from the array
        const randomIndex = Math.floor(Math.random() * videoIds.length);
        const randomVideoId = videoIds[randomIndex];

        // Set the state to the chosen video ID
        // videoIds = randomVideoId;
        // res.send(randomVideoId);
        const embedUrl = `https://www.youtube.com/embed/${randomVideoId}`;
        const iframeHtml = `<iframe width="560" height="315" src="${embedUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        //res.send(randomVideoId);

        res.writeHead(200, {'Content-type': 'application/json'});

        let obj = {
            status: "OK", 
            data: randomVideoId
        }
        res.end(JSON.stringify(obj));

    } catch (err) {
        next(err);
    }
});
app.get("/drumbreaks", async (req, res, next) => {
    console.log("received");

    try {
        const playlistId = "PLBgvaqet5h7tne76O-qRO9Z2EDjip72Tk"
        const response = await youtube.playlistItems.list({
            part: "snippet",
            playlistId: playlistId,
            maxResults: 50,
        });
        const videoIds = response.data.items.map((item) => item.snippet.resourceId.videoId);
        // Choose a random video ID from the array
        const randomIndex = Math.floor(Math.random() * videoIds.length);
        const randomVideoId = videoIds[randomIndex];

        // Set the state to the chosen video ID
        // videoIds = randomVideoId;
        // res.send(randomVideoId);
        const embedUrl = `https://www.youtube.com/embed/${randomVideoId}`;
        const iframeHtml = `<iframe width="560" height="315" src="${embedUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        //res.send(randomVideoId);

        res.writeHead(200, {'Content-type': 'application/json'});

        let obj = {
            status: "OK", 
            data: randomVideoId
        }
        res.end(JSON.stringify(obj));

    } catch (err) {
        next(err);
    }
});


app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});