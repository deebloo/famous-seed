'use strict';

var Modifier  = require('famous/core/Modifier'),
    Transform = require('famous/core/Transform');

var initialTime = Date.now();

var SpinModifier = new Modifier({
  transform : function() {
    return Transform.rotateY(0.002 * (Date.now() - initialTime));
  }
});

module.exports = SpinModifier;
