// Import Famous Module
var View               = require('famous/core/View'),
    Surface            = require('famous/core/Surface'),
    HeaderFooterLayout = require('famous/views/HeaderFooterLayout'),
    ImageSurface       = require('famous/surfaces/ImageSurface');

// Import Custom Modifiers
var centerSpinModifier = require('../modifiers/centerSpinModifier');

/**
 * @name App View
 * @description Create the main app view for the website
 * @constructor
 */
function AppView() {
  View.apply(this, arguments); // Call view and apply passed in arguments

  var layout = new HeaderFooterLayout(); // Create header/footer layout

  var logo = new ImageSurface({
    size: [200, 200],
    content: 'images/famous_logo.png',
    classes: ['backfaceVisibility']
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
