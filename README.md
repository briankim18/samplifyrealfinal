# Welcome to Samplify!
This project was created by Kevin Chandran, Joshua Cheng, Brian Kim & Jenna Pearson as a part of the CS 4644.

![Screenshot (568)](https://user-images.githubusercontent.com/85366888/236935898-c43f5273-f5db-464d-a4e8-a43c4555785a.png)

"Samplify" is an innovative web application made for sample-based music producers that combines the YouTube and music worlds to deliver a productive, user-friendly, and engaging experience. Samplify reduces the need for traditional crate digging by using YouTube API to access curated genre-specific playlists, saving producer's time and effort while preserving the genuine feel of finding unusual and obscure samples. With customizable filters such as origin, Samplify empowers users to explore a vast range of musical styles and overcome creative blocks. 

Samplify incorporates a "Chopify" tool, transforming the sampled audio into playable pads, inspired by the iconic Akai MPC. This feature encourages musicians to manipulate and re-contextualize the samples, fostering creativity and promoting the evolution of new compositions. Through the integration of YouTube, music, and cutting-edge technology, Samplify revolutionizes the sampling process, streamlining the workflow for producers while honoring the culture and art of crate digging.

## Necessary Imports:
In order to run samplify begin by importing the following dependencies with the below command:

### `npm install react-pro-sidebar react-icons react-router-dom react-bootstrap bootstrap react-slider`

## To run
The easiest way to run Samplify locally is by executing the following commands:

One one terminal run these two commands:
### `cd website/src/Components/Video` 
### `node server.js`

In a separate terminal run:
### `cd website`
### `npm start`

The Samplify instance should then be opened in your default browser window.

## Additional Available Commands

As this web app was created in React, it also supports the following additional commands:

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

Expand All
	@@ -35,9 +49,7 @@ Your app is ready to be deployed!
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!**
If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.
