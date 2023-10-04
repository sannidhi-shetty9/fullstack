const express = require('express');
const app = express();
const port = 3000;
// Define a route and response
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});
// Start the server
app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});