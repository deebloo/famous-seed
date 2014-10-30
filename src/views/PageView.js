"use strict";

var View          = require('famous/core/View'),
    Surface       = require('famous/core/Surface'),
    Transform     = require('famous/core/Transform'),
    StateModifier = require('famous/modifiers/StateModifier'),
    HeaderFooter  = require('famous/views/HeaderFooterLayout'),
    ImageSurface  = require('famous/surfaces/ImageSurface');

/**
 * @name Page View
 * @description Page view constructor
 * @constructor
 */
function PageView() {
  View.apply(this, arguments);

  _createLayout.call(this); // Create Layout
  _createHeader.call(this); // Create Header
  _createBody.call(this); // Create Body

  _setListeners.call(this); // Set Event Listeners
}

PageView.prototype = Object.create(View.prototype);
PageView.prototype.constructor = PageView;

PageView.DEFAULT_OPTIONS = {
  headerSize: 44
};

/**
 * @name Create Layout
 * @private
 */
function _createLayout() {
  this.layout = new HeaderFooter({
    headerSize: this.options.headerSize
  });

  var layoutModifier = new StateModifier({
    transform: Transform.translate(0, 0, 0.1)
  });

  this.add(layoutModifier).add(this.layout);
}

function _createHeader() {
  var backgroundSurface = new Surface({
    properties: {
      backgroundColor: 'black'
    }
  });

  this.hamburgerSurface = new ImageSurface({
    size: [44, 44],
    content : 'images/hamburger.png'
  });

  var searchSurface = new ImageSurface({
    size: [232, 44],
    content : 'images/search.png'
  });

  var iconSurface = new ImageSurface({
    size: [44, 44],
    content : 'images/icon.png'
  });

  var backgroundModifier = new StateModifier({
    transform : Transform.behind
  });

  var hamburgerModifier = new StateModifier({
    origin: [0, 0.5],
    align : [0, 0.5]
  });

  var searchModifier = new StateModifier({
    origin: [0.5, 0.5],
    align : [0.5, 0.5]
  });

  var iconModifier = new StateModifier({
    origin: [1, 0.5],
    align : [1, 0.5]
  });

  this.layout.header.add(backgroundModifier).add(backgroundSurface);
  this.layout.header.add(hamburgerModifier).add(this.hamburgerSurface);
  this.layout.header.add(searchModifier).add(searchSurface);
  this.layout.header.add(iconModifier).add(iconSurface);
}

function _createBody() {
  this.bodySurface = new ImageSurface({
    size : [undefined, true],
    content : 'images/body.png'
  });

  this.layout.content.add(this.bodySurface);
}

function _setListeners() {
  this.hamburgerSurface.on('click', function() {
    this._eventOutput.emit('menuToggle');
  }.bind(this));
}


module.exports = PageView;
