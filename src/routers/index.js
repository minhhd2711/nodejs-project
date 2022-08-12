const express = require('express');
const router = express.Router();
const users = require('./users');
const authentication = require('./authentication');

router.get('/ready', (req, res) => {
  res.status(200).json({
    "status": "ok"
  });
})

router.use('/users', users)
router.use('/authentication', authentication)

module.exports = router;
