'use strict';

const path    = require('path');
const express = require('express');
const morgan  = require('morgan');

const app = express();
const port = 3000;

// static
app.use(express.static(path.join(process.cwd(), 'dist')));

app.use(require('cookie-parser')());
app.use(require('body-parser').json());

// set router
require('./routes')(app);

// boot
app.listen(process.env.PORT || port, (err) => {
  if (err) throw err;
});
