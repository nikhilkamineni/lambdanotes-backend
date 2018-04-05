/* eslint-disable no-console */
const mongoose = require('mongoose');
const server = require('./server');
// const { PORT, MONGODB_URL } = require('./config');
require('dotenv').config();
const serverPort = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log('Successfully connected to MongoDB!'))
  .catch(err => console.error('Failed to connect to MongoDB!', err));

// Connect to express server
server.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${serverPort}!`);
});
