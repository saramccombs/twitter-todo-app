// Setup server
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
// ------------------ Don't change above this line ------------------

// First route. Go to http://localhost:5000 and you should see Hello World in the
// browser. Remember the project has no UI, so this is just for you to experience
// that this all works.
app.get('/', (req, res) => res.send('Hello World!!'));

// GET ALL
app.get('/api', (req, res) => {
  res.send('Hello All!');
});

// GET ONE.. but just pulling name from params
app.get('/api/:name', (req, res) => {
  res.send(`Hello ${req.params.name}`);
});

// CREATE
app.post('/api', (req, res) => {
  const { name } = req.query;
  // Use cookies for ephemeral data persistane?
  console.log(name);
  res.redirect(`/api/${name}`);
});

// UPDATE
app.put('/api/:name', (req, res) => {
  const newName = req.query.name;
  res.redirect(`/api/${newName}`);
});

// DELETE
app.delete('/api/:name', (req, res) => {
  // How to detele without any data persistance? Use cookies and clear the requested cookie?
});

// -------------------- Don't change below this line ------------------
// Setup where the server listens e.g. which port. Necessary for the browser for example.
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
