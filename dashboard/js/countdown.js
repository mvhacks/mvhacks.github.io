// high key copied from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_countdown cause didn't want to write myself

var countDownDate = new Date("March 30, 2019 20:30:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

	// Get todays date and time
	var now = Date.now();

	// Find the distance between now and the count down date
	var distance = countDownDate - now;
		
	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance / (1000 * 60 * 60)));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	let text = '';

	if (hours > 0) {
		text += hours + ':';
		if (minutes < 10) {
			minutes = '0' + minutes;
		}
	}

	if (seconds < 10) {
		seconds = '0' + seconds;
	}
	
	text += minutes + ':' + seconds;

	// Output the result in an element with id="demo"
	timeLeft.innerText = text;
		
	// If the count down is over, write some text 
	if (distance < 0) {
		clearInterval(x);
		timeLeft.innerHTML = 'STOP HACKING';
	}
}, 1000);