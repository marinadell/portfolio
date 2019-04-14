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

router.get('/:id', (req, res) => {
  const queryText = 'SELECT * FROM projects WHERE id=$1';
  pool.query(queryText, [req.params.id])
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.log('Error completing SELECT project query', err);
      res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
  const newProject = req.body;
  console.log(newProject);
  const queryText = `INSERT INTO projects ("name", "description", "github", "date_completed", "tag_id", "website")
                    VALUES ($1, $2, $3, $4, $5, $6)`;
  const queryValues = [
    newProject.project,
    newProject.description,
    newProject.github,
    newProject.date,
    newProject.tag,
    newProject.website,
  ];
  pool.query(queryText, queryValues)
    .then(() => { res.sendStatus(201); })
    .catch((err) => {
      console.log('Error completing adding new Project', err);
      res.sendStatus(500);
    });
});

router.delete('/:id', (req, res) => {
  const queryText = 'DELETE FROM projects WHERE id=$1';
  //pool.query(queryText, [req.query.id])
  pool.query(queryText, [req.params.id])
    .then(() => { res.sendStatus(200); })
    .catch((err) => {
      console.log('Error deleting project query', err);
      res.sendStatus(500);
    });
});

module.exports = router;