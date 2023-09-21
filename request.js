const express = require('express');
const app = express();

// Define a route that returns random JSON data
app.get('/', async (req, res) => {
  let randomData = await fetch('https://random-json-data-api.onrender.com').then(res => res.json())
  res.send(randomData)
})

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
