'use strict';

// Import Famous Module
var View          = require('famous/core/View'),
    StateModifier = require('famous/modifiers/StateModifier'),
    FastClick     = require('famous/inputs/FastClick');

var PageView = require('./PageView');

/**
 * @name Create Page View
 * @private
 */
function _createPageView() {
  this.pageView = new PageView();
  this.pageModifier = new StateModifier();

  this.add(this.pageModifier).add(this.pageView);
}

/**
 * @name App View
 * @description Create the main app view for the website
 * @constructor
 */
function AppView() {
  View.apply(this, arguments);

  this.menuToggle = false;

  _createPageView.call(this);
}

// Set up prototype chain
AppView.prototype = Object.create(View.prototype);
AppView.prototype.constructor = AppView;

// Default Options object
AppView.DEFAULT_OPTIONS = {};

module.exports = AppView;
