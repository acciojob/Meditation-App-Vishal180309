// Get elements
const video = document.getElementById('video');
const audio = document.getElementById('audio');
const soundButtons = document.querySelectorAll('.sound-picker button');
const timeButtons = document.querySelectorAll('.time-select button');
const timeDisplay = document.querySelector('.time-display');
const playButton = document.querySelector('.play');

let duration = 600; // Default time 10 min
let timer;

// Set initial video and audio sources
video.src = 'videos/beach.mp4';
audio.src = 'sounds/beach.mp3';

// Handle sound selection
soundButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.id === 'sound-1') {
            video.src = 'videos/beach.mp4';
            audio.src = 'sounds/beach.mp3';
        } else if (button.id === 'sound-2') {
            video.src = 'videos/rain.mp4';
            audio.src = 'sounds/rain.mp3';
        }
        video.play();
        audio.play();
        playButton.textContent = 'Pause';
    });
});

// Handle time selection
timeButtons.forEach(button => {
    button.addEventListener('click', () => {
        duration = parseInt(button.getAttribute('data-time'));
        updateDisplay(duration);
    });
});

// Handle Play/Pause button
playButton.addEventListener('click', () => {
    if (playButton.textContent === 'Play') {
        startTimer();
        video.play();
        audio.play();
        playButton.textContent = 'Pause';
    } else {
        clearInterval(timer);
        video.pause();
        audio.pause();
        playButton.textContent = 'Play';
    }
});

// Start countdown timer
function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
        if (duration > 0) {
            duration--;
            updateDisplay(duration);
        } else {
            clearInterval(timer);
            video.pause();
            audio.pause();
            playButton.textContent = 'Play';
        }
    }, 1000);
}

// Update the time display
function updateDisplay(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    timeDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
}
