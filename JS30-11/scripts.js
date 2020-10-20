// Get all Elements
const   player = document.querySelector('.player'),
		video = player.querySelector('.viewer'),
		progress = player.querySelector('.progress'),
		progressBar = player.querySelector('.progress__filled'),
		toggle = player.querySelector('.toggle'),
		skipButtons = player.querySelectorAll('[data-skip]'),
		ranges = player.querySelectorAll('.player__slider');

// Build out functions
function togglePlay() {
	video.paused ? video.play() : video.pause();
}

// Hook up event listeners
