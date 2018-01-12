# @my-dish/generator-express-template

## Usage
```sh
$ npm i -g @my-dish/generator-express-template
$ yo
```

## Output
### Entrypoint
#### Files
app.js

#### Templates
```js
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
```

### Router
#### Questions
- Would you like to create an entrypoint?(routes/index.js)
- What is the name of the api?

#### Files
- index.js
- [route-name]
  - [route-name].js
  - index.js

#### Templates
```js
// index.js
'use strict';

const path = require('path');

function routes(app) {
  app.use('/v1/a', require('./apis/a'));
}

module.exports = routes;
```

```js
// index.js
'use strict';

const { Router } = require('express');
const {
  show,
  index,
  update,
  create,
  destroy
} = require('./controller');

const router = new Router();

router.get('/', index);
router.get('/:id', show);
router.put('/:id', update);
router.post('/create', create);
router.delete('/:id', destroy);

module.exports = router;
```

```js
// controller.js
'use strict';

function index(req, res) {
  return res.send({});
}

function show(req, res) {
  return res.send({});
}

function update(req, res) {
  return res.send({});
}

function create(req, res) {
  return res.send({});
}

function destroy(req, res) {
  return res.send({});
}

module.exports = {
  show,
  index,
  update,
  create,
  destroy
};
```