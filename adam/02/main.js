(function(){
  

    //set up dom variable
    var dom;
   
 
    //set up init function
    var init = function() {
        cacheDOM();
        setDate();
        setInterval(setDate, 1000);
    }

    
    //cache the DOM
    var cacheDOM = function() {
        dom = {};
        dom.secHand = document.querySelector('.sec-hand');
        dom.hourHand = document.querySelector('.hour-hand');
        dom.minHand = document.querySelector('.min-hand');
    }
    

    //set up event handlers
    function setDate() {
        var time = new Date();
        var seconds = time.getSeconds();
        var minutes = time.getMinutes();
        var hours = time.getHours();
        var secondDegrees = ((seconds / 60) * 360) + 90;
        var hourDegrees = ((hours / 12) * 360) + 90;
        var minuteDegrees = ((minutes / 60) * 360) + 90;
        dom.secHand.style.transform = 'rotate(' + secondDegrees + 'deg)';
        dom.hourHand.style.transform = 'rotate(' + hourDegrees + 'deg)';
        dom.minHand.style.transform = 'rotate(' + minuteDegrees + 'deg)';

        if (secondDegrees == 90) {
            dom.secHand.style.transition = 'all 0s';
        } else {
            dom.secHand.style.transition = 'all 0.05s';
            dom.secHand.style.transitionTimingFunction = "cubic-bezier(0.23, 1.9, 0.58, 1)";
        }

        if (minuteDegrees == 90) {
            dom.minHand.style.transition = 'all 0s';
        } else {
            dom.minHand.style.transition = 'all 0.05s';
            dom.minHand.style.transitionTimingFunction = "cubic-bezier(0.23, 1.9, 0.58, 1)";
        }
        
        if (hourDegrees == 90) {
            dom.hourHand.style.transition = 'all 0s';
        } else {
            dom.hourHand.style.transition = 'all 0.05s';
            dom.hourHand.style.transitionTimingFunction = "cubic-bezier(0.23, 1.9, 0.58, 1)";
        }
    };
    

    
    //initialize module
    init();
    
  })();