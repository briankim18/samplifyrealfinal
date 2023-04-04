// sample.js
document.addEventListener('DOMContentLoaded', function () {
  const audioFiles = [
    'path/to/audio1.mp3',
    'path/to/audio2.mp3',
    'path/to/audio3.mp3',
    'path/to/audio4.mp3',
    'path/to/audio5.mp3',
    'path/to/audio6.mp3',
  ];

  let currentAudio = null;

  function playAudio(index) {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    currentAudio = new Audio(audioFiles[index - 1]);
    currentAudio.loop = true;
    currentAudio.play();
  }

  function stopAudio() {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
  }

  function createButton(text, callback) {
    const button = document.createElement('button');
    button.textContent = text;
    button.addEventListener('click', callback);
    return button;
  }

  for (let i = 1; i <= audioFiles.length; i++) {
    const button = createButton(`Play Audio ${i}`, () => playAudio(i));
    document.body.appendChild(button);
  }

  const stopButton = createButton('Stop', stopAudio);
  document.body.appendChild(stopButton);
});
