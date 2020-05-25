const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello All!');
});

// GET ONE.. but just pulling name from params
router.get('/:name', (req, res) => {
  res.send(`Hello ${req.params.name}`);
});

router.post('/api', (req, res) => {
  const { name } = req.query;
  // Use cookies for ephemeral data persistance?
  data.push(name);
  console.log(data);
  res.redirect(`/api/${name}`);
});

// UPDATE
router.put('/api/:name', (req, res) => {
  const newName = req.query.name;
  res.redirect(`/api/${newName}`);
});

// DELETE
router.delete('/api/:name', (req, res) => {
  // How to detele without any data persistance? Use cookies and clear the requested cookie?
});

module.exports = router;
