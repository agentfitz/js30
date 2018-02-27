//jshint esnext:true

(function() {


	// Setup some module variables
	let dom;


	// Cache the dom
	const cacheDom = function() {

		dom = {};
		dom.clock = document.querySelector('.clock');
		dom.hourHand = dom.clock.querySelector('.clock__hour-hand');
		dom.minuteHand = dom.clock.querySelector('.clock__minute-hand');
		dom.secondHand = dom.clock.querySelector('.clock__second-hand');

	};


	// Update the clock
	const updateClock = function() {

		const time = new Date();

		const seconds = time.getSeconds();
		const secondDegrees = ((seconds / 60) * 360) - 90;

		const minutes = time.getMinutes();
		const minuteDegrees = ((minutes / 60) * 360) - 90;

		const hours = time.getHours();
		const hourDegrees = ((hours / 12) * 360) - 90;

		dom.secondHand.style.transform = 'rotate(' + secondDegrees + 'deg)';
		dom.minuteHand.style.transform = 'rotate(' + minuteDegrees + 'deg)';
		dom.hourHand.style.transform = 'rotate(' + hourDegrees + 'deg)';

	};


	// Start the clock
	const startClock = function() {;

		const timeInterval = window.setInterval(updateClock, 1000);

	};


	// Initialize the module
	const init = function() {

		cacheDom();

		startClock();

	};


	// Start me up
	init();


}());