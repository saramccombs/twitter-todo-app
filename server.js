// Setup server
const express = require('express');
const path = require('path');

const app = express();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// parse application/json
app.use(express.json());

// This is where my static assets are!
app.use(express.static(`${__dirname}/public`));

//  Setup EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// ------------------ Don't change above this line ------------------

// First route. Go to http://localhost:5000 and you should see Hello World in the
// browser. Remember the project has no UI, so this is just for you to experience
// that this all works.

const data = {};

const mainRoutes = require('./routes/index');
const apiRoutes = require('./routes/api');

app.use('/', mainRoutes);
app.use('/api', apiRoutes);

// CREATE

// -------------------- Don't change below this line ------------------
// Setup where the server listens e.g. which port. Necessary for the browser for example.
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
