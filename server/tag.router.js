const express = require('express');
const router = express.Router();
const pool = require('./pool');

router.get( '/', (req, res) => {
  console.log('Tag GET request');
  pool.query(`SELECT * FROM tags;`)
  .then(result => {
    res.send(result.rows);
  })
  .catch(error => {
      console.log('Something went wrong getting projects', error);
      res.sendStatus(500)
  })
})

module.exports = router;