//      Default sly functions.
  var sly = new Sly($('.frame'), {

      // Item based navigation
      itemNav: 'forceCentered',
      smart: 1,
      activateMiddle: 1,
      activateOn: 'click',

      // Scrollbar
      //scrollBar: self.$('.js-slyScrollbar'),
      dragHandle: 1,
//            dynamicHandle: 1,
      scrollBy: 1,
      clickBar: 1,

      // Dragging
      mouseDragging: 1,
      touchDragging: 1,
      releaseSwing: 1,
      startAt: 0,
      swingSpeed: 0.2,
      elasticBounds: 1,

      // Mixed options
      easing: 'swing',
      speed: 600,

      // Classes
      activeClass: 'active',

      // Buttons
      prev: self.$('.js-previous'),
      next: self.$('.js-next')
  });

sly.init();