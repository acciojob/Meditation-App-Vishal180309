//your JS code here. If required.
// Get the video element
const video = document.getElementById('video');

// Get the audio element
const audio = document.getElementById('audio');

// Get the sound picker buttons
const soundPickerButtons = document.querySelectorAll('.sound-picker button');

// Get the time select buttons
const timeSelectButtons = document.querySelectorAll('.time-select button');

// Get the time display element
const timeDisplay = document.querySelector('.time-display');

// Get the play button
const playButton = document.querySelector('.play');

// Set the initial video and audio sources
video.src = 'videos/beach.mp4';
audio.src = 'sounds/beach.mp3';

// Function to handle sound picker button clicks
soundPickerButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id === 'sound-1') {
            video.src = 'videos/beach.mp4';
            audio.src = 'sounds/beach.mp3';
        } else if (button.id === 'sound-2') {
            video.src = 'videos/rain.mp4';
            audio.src = 'sounds/rain.mp3';
        }
    });
});

// Function to handle time select button clicks
timeSelectButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const time = button.textContent.split(' ')[0];
        const minutes = parseInt(time);
        const seconds = 0;
        timeDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        // Start the timer
        let timer = setInterval(() => {
            seconds++;
            if (seconds >= 60) {
                minutes++;
                seconds = 0;
            }
            timeDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
            if (minutes >= time) {
                clearInterval(timer);
            }
        }, 1000);
    });
});

// Function to handle play button clicks
playButton.addEventListener('click', () => {
    if (playButton.textContent === 'Play') {
        video.play();
        audio.play();
        playButton.textContent = 'Pause';
    } else if (playButton.textContent === 'Pause') {
        video.pause();
        audio.pause();
        playButton.textContent = 'Play';
    }
});
