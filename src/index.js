"use strict";

// load css
require('./styles');

// Load polyfills
require('famous-polyfills');

var Engine  = require('famous/core/Engine'),
    AppView = require('./views/AppView');

var mainContext = Engine.createContext();

var appView = new AppView();

mainContext.add(appView);
