const express = require('express');
const router = express.Router();
const pool = require('./pool');

router.get( '/', (req, res) => {
  console.log('Project GET request');
  pool.query(`SELECT "projects"."id", "projects"."name" AS "project_name", "projects"."description", "projects"."thumbnail", "projects"."website", "projects"."github", "projects"."date_completed", "tags"."name" FROM projects
  JOIN tags ON "projects"."tag_id" = "tags"."id";`)
  .then(result => {
    res.send(result.rows);
  })
  .catch(error => {
      console.log('Something went wrong getting projects', error);
      res.sendStatus(500)
  })
})

module.exports = router;