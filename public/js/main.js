var Banner = function() {

    function get(element) {
      return document.getElementById(element);
    }

    var that = this,
        container = get('container'),
        burgers = get('burgers'),
        dog = get('dog'),
        adidas = get('adidas'),
        resetArrow = get('resetArrow'),
        resetCont = get('resetCont');

    var showFrame = function(id) {
      console.log('Showing frame ' + id);
        switch(id) {

            case 1:
              hide(adidas, 0.15)
              hide(resetCont, 0.15)
              show(burgers, 0.15)
              holdFrame(2, 3)
            break;

            case 2:
              hide(burgers, 0.75)
              show(dog, 0.75)
              holdFrame(3, 3)
            break;

            case 3:
              hide(dog, 0.75)
              show(adidas, 0.75)
              show(resetCont, 2.2)
              holdFrame(4, 3)
            break;
        }

      resetCont.addEventListener("click", function(event) {
         showFrame(1);
      });

    }

    function setClass(element, time, state) {
        var delay = time * 1000;
        window.setTimeout(function(){
            element.className = state;
        }, delay);
    }

    function show(element, time) {
        setClass(element, time, "show");
    }

    function hide(element, time) {
        setClass(element, time, "hide");
    }

    var holdFrame = function(frame, time) {
        var delay = time * 1000;
        window.setTimeout(function(){
          showFrame(frame);
        }, delay);
    }

    this.init = function() {
        showFrame(1);
    };


    var rotate = document.getElementById( 'resetArrow' );

    rotate.addEventListener( 'mouseover', function () {
        
        this.className = 'over';
        
    }, false );

    rotate.addEventListener( 'mouseout', function () {
        
        var rotate = this;
        
        rotate.className = 'out';
        window.setTimeout( function () { rotate.className = '' }, 550 );
        
    }, false );



    function reset() {
        container.replaceChild(_resetCont, resetCont);
        resetCont = get('resetCont');
        setElements();
        that.showFrame(1);
    }

};

var myBanner = new Banner;

window.onload = function() {
  if (Enabler.isInitialized()) {
      enablerInitHandler();
  } else {
      Enabler.addEventListener(studio.events.StudioEvent.INIT,
      enablerInitHandler);
  }
}

function enablerInitHandler() {
    myBanner.init();
}

function getOpacity(element) {
    if(element.currentStyle) {
        return element.currentStyle['opacity'];
    } else if(getComputedStyle(element)) {
        return getComputedStyle(element).opacity;
    }
}
