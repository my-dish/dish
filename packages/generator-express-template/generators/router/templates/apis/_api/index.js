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
