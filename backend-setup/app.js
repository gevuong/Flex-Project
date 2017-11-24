
// modules
let express = require('express');
let app = express(); // start express app
let mongoose = require('mongoose');
let morgan = require('morgan') // displays on terminal when API endpoint is hit

// import directories
let router = require('./services/routes');
let config = require('./config'); // requires folder

// port setup, if in production, you'll have environment variable that says what port is, otherwise default to 3000
let port = process.env.PORT || 3000;

// We initialize the app only after the database connection is ready. This ensures that the application won’t crash or error out by trying database operations before the connection is established.
mongoose.connect(config.getDBConnectionString(), {
  useMongoClient: true,
}, (err) => {
  if (err) return console.log(err);

  app.listen(port, function() {
    // console.log('listening to 3000');
  });
});

app.use(morgan('combined'));
app.use('/v1', router);
