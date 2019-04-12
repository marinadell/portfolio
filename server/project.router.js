const express = require('express');
const router = express.Router();
const pool = require('./pool');

router.get( '/', (req, res) => {
  console.log('Project GET request');
})

module.exports = router;