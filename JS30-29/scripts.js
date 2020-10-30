let countDown;
const timerDisplay = document.querySelector('.display__time-left');


function timer(seconds)
{
	const now = Date.now(),
		then = now + seconds * 1000; // Then is in milliseconds, so we need to multiply it by 1000

	displayTimeLeft(seconds);

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
	console.log(seconds);
	const minutes = Math.floor(seconds / 60);
	const remainderSeconds = seconds % 60;
	const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
	document.title = display;
	timerDisplay.textContent = display;
}
