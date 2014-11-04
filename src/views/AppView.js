'use strict';

// Import Famous Module
var View = require('famous/core/View');

require('famous/inputs/FastClick');

var PageView = require('./PageView'); // Import PageView

/**
 * @name App View
 * @description Create the main app view for the website
 * @constructor
 */
function AppView() {
  View.apply(this, arguments);

  _createPageView.call(this);
}

// Set up prototype chain
AppView.prototype = Object.create(View.prototype);
AppView.prototype.constructor = AppView;

// Default Options object
AppView.DEFAULT_OPTIONS = {};

/**
 * @name Create Page View
 * @private
 */
function _createPageView() {
  this.pageView = new PageView();

  this.add(this.pageView);
}

module.exports = AppView;
