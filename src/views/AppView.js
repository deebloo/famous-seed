var View = require('famous/core/View'),
    Surface = require('famous/core/Surface'),
    Transform = require('famous/core/Transform'),
    StateModifier = require('famous/modifiers/StateModifier'),
    Modifier = require('famous/core/Modifier'),
    ImageSurface = require('famous/surfaces/ImageSurface');

function AppView() {
  View.apply(this, arguments);

  var logo = new ImageSurface({
    size: [200, 200],
    content: 'images/famous_logo.png',
    classes: ['backfaceVisibility']
  });

  var initialTime = Date.now();

  var centerSpinModifier = new Modifier({
    align: [0.5, 0.5],
    origin: [0.5, 0.5],
    transform : function() {
      return Transform.rotateY(.002 * (Date.now() - initialTime));
    }
  });

  this.add(centerSpinModifier).add(logo);
}

AppView.prototype = Object.create(View.prototype);
AppView.prototype.constructor = AppView;

AppView.DEFAULT_OPTIONS = {};

module.exports = AppView;