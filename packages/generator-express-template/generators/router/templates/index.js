'use strict';

const path = require('path');

function routes(app) {
  app.use('/v1/<%= apiname %>', require('./apis/<%= apiname %>'));
}

module.exports = routes;
