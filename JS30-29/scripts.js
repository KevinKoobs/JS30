let countDown;
function timer(seconds) {
	const now = Date.now(),
		then = now + seconds * 1000; // Then is in milliseconds, so we need to multiply it by 1000

	countDown = setInterval(() => {
		const secondsLeft = Math.round(then - Date.now() / 1000); // Date.now and then are in milliseconds
		// Check if we should stop it
		if(secondsLeft <= 0) {
			clearInterval(countDown);
		}
	}, 1000)
}

timer();
