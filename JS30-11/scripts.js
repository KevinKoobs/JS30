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
function updateButton() {
	toggle.textContent = this.paused ? '►' : '❚ ❚';
}
function skip() {
	video.currentTime +=  parseFloat(this.dataset.skip);

}
function handleRangeUpdate() {
	video[this.name] = this.value;
}
function handleProgress() {
	const percent = (video.currentTime / video.duration) * 100;
	progressBar.style.flexBasis = `${percent}%`;
}

// Hook up event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach((button) => button.addEventListener('click', skip));

ranges.forEach((range) => range.addEventListener('mousemove', handleRangeUpdate));

