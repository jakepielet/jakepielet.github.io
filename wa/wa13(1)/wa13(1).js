// Get a reference to the video element
const video = document.querySelector('#autoplay-video');

// Set the volume to 100%
video.volume = 1;

// Disable the volume controls on the video
video.removeAttribute('controls');

// Make the volume controls difficult to use
video.addEventListener('volumechange', () => {
  video.volume = 1;
});

// Get a reference to the audio context
const audioCtx = new AudioContext();

// Get a reference to the gain node, which controls the volume
const gainNode = audioCtx.createGain();
gainNode.gain.value = 0.5; // Set the initial volume to 50%

// Connect the gain node to the audio context
gainNode.connect(audioCtx.destination);

// Listen for clicks on different elements of the page
const elements = document.querySelectorAll('.clickable');
elements.forEach((element) => {
  element.addEventListener('click', () => {
    // Generate a random number between 0 and 1
    const random = Math.random();
    if (random < 0.5) {
      gainNode.gain.value += 0.05; // Increase the volume by 5%
    } else {
      gainNode.gain.value -= 0.05; // Decrease the volume by 5%
    }
  });
});

// Make the volume controls even worse
const freezeButton = document.querySelector('.freeze-button');
freezeButton.addEventListener('click', () => {
  while (true) {
    // Keep setting the gain node value to a random number between 0 and 1
    gainNode.gain.value = Math.random();
  }
});

// Listen for clicks on the "Increase Volume" and "Decrease Volume" buttons
const increaseButton = document.querySelector('.cool-button:first-of-type');
const decreaseButton = document.querySelector('.cool-button:last-of-type');

increaseButton.addEventListener('click', () => {
  const random = Math.floor(Math.random() * 100);
  gainNode.gain.value += random / 100;
  console.log(`Increased volume by ${random}.`);
});

decreaseButton.addEventListener('click', () => {
  const random = Math.floor(Math.random() * 100);
  gainNode.gain.value -= random / 100;
  console.log(`Decreased volume by ${random}.`);
});
