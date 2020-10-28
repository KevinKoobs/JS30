const video = document.querySelector('.player'),
	canvas = document.querySelector('.photo'),
	ctx = canvas.getContext('2d'),
	strip = document.querySelector('.strip'),
	snap = document.querySelector('.snap');

function getVideo() {
	navigator.mediaDevices.getUserMedia({video: true, audio : false})
		.then(localMediaStream => {
			console.log(localMediaStream);
		});
}
getVideo();
