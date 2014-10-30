"use strict";

// Import Famous Module
var View          = require('famous/core/View'),
    StateModifier = require('famous/modifiers/StateModifier'),
    Transform     = require('famous/core/Transform'),
    FastClick     = require('famous/inputs/FastClick');

var PageView = require('./PageView');

/**
 * @name App View
 * @description Create the main app view for the website
 * @constructor
 */
function AppView() {
  View.apply(this, arguments);

  this.menuToggle = false;

  _createPageView.call(this);
  _setListeners.call(this);
}

// Set up prototype chain
AppView.prototype = Object.create(View.prototype);
AppView.prototype.constructor = AppView;

// Default Options object
AppView.DEFAULT_OPTIONS = {
  openPosition: 276,
  transition: {
    duration: 300,
    curve: 'easeOut'
  }
};

/**
 * @name Toggle Menu
 * @description toggle the hamburger menu right and left
 */
AppView.prototype.toggleMenu = function() {
  if(this.menuToggle) {
    this.slideLeft();
  } else {
    this.slideRight();
  }
  this.menuToggle = !this.menuToggle;
};

AppView.prototype.slideRight = function() {
  this.pageModifier.setTransform(Transform.translate(276, 0, 0), this.options.transition);
};

AppView.prototype.slideLeft = function() {
  this.pageModifier.setTransform(Transform.translate(0, 0, 0), this.options.transition);
};

/**
 * @name Create Page View
 * @private
 */
function _createPageView() {
  this.pageView = new PageView();
  this.pageModifier = new StateModifier();

  this.add(this.pageModifier).add(this.pageView);
}

function _setListeners() {
  this.pageView.on('menuToggle', this.toggleMenu.bind(this));
}

module.exports = AppView;
