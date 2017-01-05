const express = require('express');
const router = express.Router();
const db = require('../db/users')

router.get('/', function(req, res, next) {
  db.listUsers().then(data => res.send(data))
});

router.get('/:id', function(req, res, next) {
  console.log('here');
  db.readUser(req.params.id).then(data => res.send(data))
});

module.exports = router;
