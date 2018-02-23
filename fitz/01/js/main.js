/*
	Drum machine module.
		- sets up data for samples
		- dynamically renders drum-kit markup
		- listens for key presses (and clicks on sampler pads) and plays the associated audio file
		- displays a dancer at random for each "sound session"
*/
(function() {


	// Setup some module wide variables
	var dom;
	var numDancers = 10;
	var samples = [
		{
			"key": "a",
			"name": "kick",
			"soundFile": "kick.wav"
		},
		{
			"key": "s",
			"name": "open-hat",
			"soundFile": "openhat.wav"
		},
		{
			"key": "d",
			"name": "snare",
			"soundFile": "snare.wav"
		},
		{
			"key": "f",
			"name": "hi-hat",
			"soundFile": "hihat.wav"
		},
		{
			"key": "j",
			"name": "tom 1",
			"soundFile": "tom1.wav"
		},
		{
			"key": "k",
			"name": "tom 2",
			"soundFile": "tom2.wav"
		},
		{
			"key": "l",
			"name": "shaker",
			"soundFile": "shaker.wav"
		},
		{
			"key": ";",
			"name": "ride",
			"soundFile": "ride.wav"
		}
	];


	// Cache the dom
	var cacheDom = function() {
		dom = {};
		dom.app = document.querySelector('.app');
		dom.pad = document.querySelectorAll('.drum-machine__pad');
		dom.dancer = document.querySelector('.dancer');
	};


	// Bind the event handlers
	var bindEventHandlers = function() {

		document.addEventListener('keydown', onKeyDown);
		dom.pad.forEach(bindPadClicks);

	};


	// Bind the pad clicks
	var bindPadClicks = function(pad) {
		pad.addEventListener('click', onPadClicked);
	};


	// Fires on every keypress
	var onKeyDown = function(e) {

		console.log(e);
		var pad = document.querySelector(`[data-key="${e.key}"]`);
		var keyHasSound = !!pad;

		if (!keyHasSound) return;

		onPadClicked.call(pad);

	};


	// Pad click handler
	var onPadClicked = function() {

		var pad = this;
		var key = pad.getAttribute('data-key');
		var audio = document.querySelector(`audio[data-key="${key}"]`);
		var allActivePads = document.querySelectorAll('.drum-machine__pad--is-playing');
		var isFirstSoundToPlay = !allActivePads.length;

		pad.classList.add('drum-machine__pad--is-playing');
		dom.app.classList.add('app--is-playing');

		audio.currentTime = 0;
		audio.play();

		audio.addEventListener('ended', function() {
			onAudioEnded(pad);
		});

		if (isFirstSoundToPlay) {
			dom.dancer.setAttribute('src', 'img/dancer' + getRandomInt(1, numDancers) + '.gif');
		}

	};


	// Get a random integer
	var getRandomInt = function(min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	};


	// Audio file has stopped playback
	var onAudioEnded = function(pad) {

		pad.classList.remove('drum-machine__pad--is-playing');

		let allActivePads = document.querySelectorAll('.drum-machine__pad--is-playing');

		if (!allActivePads.length) {
			dom.app.classList.remove('app--is-playing');
		}

	};


	// Render the drum kit markup
	var renderMarkup = function(samples) {

		var template = document.querySelector('#template');

		for (var i = 0; i < samples.length; i++) {

			var sample = samples[i];
			var clone = template.content.cloneNode(true);
			var pad = clone.querySelector('.drum-machine__pad');
			var key = clone.querySelector('.drum-machine__pad-key');
			var name = clone.querySelector('.drum-machine__pad-name');
			var sound = clone.querySelector('.drum-machine__sound');

			key.innerHTML = sample.key;
			name.innerHTML = sample.name;

			pad.setAttribute('data-key', sample.key);
			sound.setAttribute('src', 'sounds/' + sample.soundFile);
			sound.setAttribute('data-key', sample.key);

			template.parentNode.appendChild(clone);

		}

		cacheDom();

	};


	// Initialize the module
	var init = function() {

		renderMarkup(samples);

		bindEventHandlers();

	};


	// Lez get this party started!
	init();


}());