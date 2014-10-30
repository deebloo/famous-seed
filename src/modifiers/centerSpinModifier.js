var Modifier  = require('famous/core/Modifier'),
    Transform = require('famous/core/Transform');

var initialTime = Date.now();

var centerSpinModifier = new Modifier({
  align: [0.5, 0.5],
  origin: [0.5, 0.5],
  transform : function() {
    return Transform.rotateY(.002 * (Date.now() - initialTime));
  }
});

module.exports = centerSpinModifier;
