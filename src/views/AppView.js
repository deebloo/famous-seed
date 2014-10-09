var View = require('famous/core/View'),
    Surface = require('famous/core/Surface'),
    HeaderFooterLayout = require('famous/views/HeaderFooterLayout'),
    Transform = require('famous/core/Transform'),
    Modifier = require('famous/core/Modifier'),
    ImageSurface = require('famous/surfaces/ImageSurface'),
    InputSurface = require('famous/surfaces/InputSurface');

function AppView() {
  View.apply(this, arguments);

  // Create Layout
  var layout = new HeaderFooterLayout();

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

  layout.header.add(new Surface({
    size: [undefined, 100],
    content: 'Header',
    classes: ['red-bg'],
    properties: {
      lineHeight: '100px',
      textAlign: 'center'
    }
  }));

  // Add login and spin modifier to layout content
  layout.content.add(centerSpinModifier).add(logo);

  layout.footer.add(new Surface({
    size: [undefined, 50],
    content: 'Footer',
    classes: ['red-bg'],
    properties: {
      lineHeight: '50px',
      textAlign: 'center'
    }
  }));

  // Add layout to the AppView
  this.add(layout);
}

AppView.prototype = Object.create(View.prototype);
AppView.prototype.constructor = AppView;

AppView.DEFAULT_OPTIONS = {};

module.exports = AppView;