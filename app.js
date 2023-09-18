const express = require('express');
const app = express();

// Define a route that returns random JSON data
app.get('/randomdata', (req, res) => {
  const randomData = generateRandomData();
  res.json(randomData);
  console.log(randomData)
});

// Function to generate random data
function generateRandomData() {
  const randomValue = Math.random();
  const randomObject = {
    id: Math.floor(Math.random() * 1000),
    name: `Random Item ${randomValue.toFixed(2)}`,
    value: randomValue,
  };
  return randomObject;
}

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
