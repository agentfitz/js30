(function(){
  

    //set up dom variable
    var dom;
   
 
    //set up init function
    var init = function() {
        cacheDOM();
        addEventListeners();
    }

    
    //cache the DOM
    var cacheDOM = function() {
        dom = {};
        dom.body = document.getElementsByTagName('body')[0];
        dom.button = document.querySelector('.button');
        dom.boom = document.querySelector('.boom');
        dom.clap = document.querySelector('.clap');
        dom.hihat = document.querySelector('.hihat');
        dom.kick = document.querySelector('.kick');
        dom.openhat = document.querySelector('.openhat');
        dom.ride = document.querySelector('.ride');
        dom.snare = document.querySelector('.snare');
        dom.tink = document.querySelector('.tink');
        dom.tom = document.querySelector('.tom');
    }
    

    //set up event handlers
    var addEventListeners = function() {
        document.addEventListener('keydown', keyPressed);
        document.addEventListener('keyup', keyReleased);
    };
    

    //when user presses down key
    var keyPressed = function(e) {
        
        //store sounds in variable
        var clap = new Audio('sounds/clap.wav');
        var hihat = new Audio('sounds/hihat.wav');
        var kick = new Audio('sounds/kick.wav');
        var openhat = new Audio('sounds/openhat.wav');
        var boom = new Audio('sounds/boom.wav');
        var ride = new Audio('sounds/ride.wav');
        var snare = new Audio('sounds/snare.wav');
        var tom = new Audio('sounds/tom.wav');
        var tink = new Audio('sounds/tink.wav');
        
        //on user keydown
        if (e.which === 65) {
            dom.clap.classList.add('button--active');
            dom.clap.classList.remove('button');
            clap.play();
        } else if (e.which === 83) {
            dom.hihat.classList.add('button--active');
            dom.hihat.classList.remove('button');
            hihat.play();
        } else if (e.which === 68) {
            dom.kick.classList.add('button--active');
            dom.kick.classList.remove('button');
            kick.play();
        } else if (e.which === 70) {
            dom.openhat.classList.add('button--active');
            dom.openhat.classList.remove('button');
            openhat.play();
        } else if (e.which === 71) {
            dom.boom.classList.add('button--active');
            dom.boom.classList.remove('button');
            boom.play();
        } else if (e.which === 72) {
            dom.ride.classList.add('button--active');
            dom.ride.classList.remove('button');
            ride.play();
        } else if (e.which === 74) {
            dom.snare.classList.add('button--active');
            dom.snare.classList.remove('button');
            snare.play();
        } else if (e.which === 75) {
            dom.tom.classList.add('button--active');
            dom.tom.classList.remove('button');
            tom.play();
        } else if (e.which === 76) {
            dom.tink.classList.add('button--active');
            dom.tink.classList.remove('button');
            tink.play();
        }
    };
    

    //when user releases key
    var keyReleased = function(e) {
        if (e.which === 65) {
            dom.clap.classList.add('button');
            dom.clap.classList.remove('button--active');
        } else if (e.which === 83) {
            dom.hihat.classList.add('button');
            dom.hihat.classList.remove('button--active');
        } else if (e.which === 68) {
            dom.kick.classList.add('button');
            dom.kick.classList.remove('button--active');
        } else if (e.which === 70) {
            dom.openhat.classList.add('button');
            dom.openhat.classList.remove('button--active');
        } else if (e.which === 71) {
            dom.boom.classList.add('button');
            dom.boom.classList.remove('button--active');
        } else if (e.which === 72) {
            dom.ride.classList.add('button');
            dom.ride.classList.remove('button--active');
        } else if (e.which === 74) {
            dom.snare.classList.add('button');
            dom.snare.classList.remove('button--active');
        } else if (e.which === 75) {
            dom.tom.classList.add('button');
            dom.tom.classList.remove('button--active');
        } else if (e.which === 76) {
            dom.tink.classList.add('button');
            dom.tink.classList.remove('button--active');
        }
    }

    
    //initialize module
    init();
    
  })();