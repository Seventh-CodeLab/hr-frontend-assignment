const express = require('express');
const ships = require('./ships.json');
const server = express();
const port = 4000;

server.listen(port, () => {
  console.log(`Server listening at ${port}`);
});

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin","*"); // Added to prevent localhost CORS issues
  res.header("Access-Control-Allow-Headers","*"); // Added to prevent localhost CORS issues
  next();
})

server.get(['/api/ships', '/api/ships/:query'], (req, res) => {
  
  
  const query = req.params.query;
  
  if (!query) {
    return res.json(ships);
  }

  const matches = ships.filter((ship) =>
    ship.heading.toLowerCase().includes(query.toLowerCase())
  );

  res.json(matches);
});
