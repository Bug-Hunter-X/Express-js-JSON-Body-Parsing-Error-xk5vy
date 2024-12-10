const express = require('express');
const app = express();
app.use(express.json()); // Middleware to parse JSON
app.post('/data', (req, res) => {
  console.log(req.body); // req.body will now contain the parsed JSON data
  res.send('Data received');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});