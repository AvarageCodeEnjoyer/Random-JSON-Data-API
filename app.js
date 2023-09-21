const express = require('express');
const app = express();

// Define a route that returns random JSON data
app.get('/', async (req, res) => {
  const randomData = await generateRandomData();
  res.json(randomData);
});

// Function to generate random data
async function generateRandomData() {
  const randomValue = Math.random();
  const randomObject = {
    id: Math.floor(Math.random() * 1000),
    name: `Random Item ${randomValue.toFixed(2)}`,
    value: randomValue,
    age: Math.floor(Math.random() * 100),
    category: ['A', 'B', 'C'][Math.floor(Math.random() * 3)],
    isAvailable: Math.random() > 0.5,
    description: `Description for Item ${randomValue.toFixed(2)}`,
    price: parseFloat((Math.random() * 1000).toFixed(2)),
    weight: parseFloat((Math.random() * 50).toFixed(2)),
    rating: parseFloat((Math.random() * 5).toFixed(2)),
    color: ['Red', 'Blue', 'Green', 'Yellow', 'Black'][Math.floor(Math.random() * 5)],
    quantity: Math.floor(Math.random() * 10),
    imageUrl: `https://example.com/image-${Math.floor(Math.random() * 10)}.jpg`,
    manufacturer: ['BrandA', 'BrandB', 'BrandC'][Math.floor(Math.random() * 3)],
    releaseDate: await getRandomDate(),
    countryOfOrigin: ['USA', 'China', 'Germany', 'Japan'][Math.floor(Math.random() * 4)],
  };
  return randomObject;
}

// Function to generate a random date within the last year
async function getRandomDate() {
  const currentDate = new Date();
  const pastDate = new Date(currentDate.getTime() - Math.random() * 365 * 24 * 60 * 60 * 1000);
  return pastDate.toISOString().split('T')[0];
}


// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
