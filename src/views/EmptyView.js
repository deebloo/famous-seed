"use strict";

/**
 * Empty View
 * @type {exports}
 */
var View = require('famous/core/View'),
    Transform = require('famous/core/Transform'),
    Modifier = require('famous/core/Modifier'),
    ImageSurface = require('famous/surfaces/ImageSurface');

function EmptyView() {
  View.apply(this, arguments);
}

EmptyView.prototype = Object.create(View.prototype);
EmptyView.prototype.constructor = EmptyView;

EmptyView.DEFAULT_OPTIONS = {};

module.exports = EmptyView;
