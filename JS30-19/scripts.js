const video = document.querySelector('.player'),
	canvas = document.querySelector('.photo'),
	ctx = canvas.getContext('2d'),
	strip = document.querySelector('.strip'),
	snap = document.querySelector('.snap');

function getVideo() {
	navigator.mediaDevices.getUserMedia({video: true, audio : false})
		.then(localMediaStream => {
			video.srcObject = localMediaStream;
			video.play();
		}).catch(err => {
			console.error(`oh no!`, err);
	});
}

function paintToCanvas() {
	const [width, height] = [video.videoWidth, video.videoHeight];
	canvas.width = width;
	canvas.height = height;

	return setInterval(() => {
		ctx.drawImage(video, 0, 0, width, height);
	}, 16);
}
getVideo();
