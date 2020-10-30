let countDown;
const timerDisplay = document.querySelector('.display__time-left'),
	endTime = document.querySelector('.display__end-time'),
	buttons = document.querySelectorAll('[data-time]');


function timer(seconds)
{
	const now = Date.now(),
		then = now + seconds * 1000; // Then is in milliseconds, so we need to multiply it by 1000

	clearInterval(countDown); // Clear any existing intervals

	displayTimeLeft(seconds);
	displayEndTime(then);

	countDown = setInterval(() => {
		const secondsLeft = Math.round((then - Date.now()) / 1000); // Date.now and then are in milliseconds
		// Check if we should stop it
		if (secondsLeft < 0) {
			clearInterval(countDown);
			return;
		}
		displayTimeLeft(secondsLeft);
	}, 1000);
}

function displayTimeLeft(seconds)
{
	const minutes = Math.floor(seconds / 60);
	const remainderSeconds = seconds % 60;
	const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
	document.title = display;
	timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
	const end = new Date(timestamp),
			hours = end.getHours(),
			minutes = end.getMinutes();
	endTime.textContent = `Be back at: ${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function startTimer() {
	timer(this.dataset.time);
}

buttons.forEach(button => button.addEventListener('click', startTimer));
