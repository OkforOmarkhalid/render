const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Initialize buildings array
let buildings = [
  { id: 1, slots: 0 },
  { id: 2, slots: "SOON" },
  { id: 3, slots: "SOON" },
  { id: 4, slots: "SOON" },
  { id: 5, slots: "SOON" }
];

// Endpoint to update the number of empty slots for a specific building (without auth)
app.post('/update-slots/:buildingId', (req, res) => {
  const buildingId = parseInt(req.params.buildingId, 10);
  const building = buildings.find(b => b.id === buildingId);

  if (building) {
    building.slots = req.body.slots;
    res.send(`Data received for Building ${buildingId}`);
  } else {
    res.status(404).send('Building not found');
  }
});

// Endpoint to get the number of empty slots for a specific building
app.get('/slots/:buildingId', (req, res) => {
  const buildingId = parseInt(req.params.buildingId, 10);
  const building = buildings.find(b => b.id === buildingId);

  if (building) {
    res.json(building);
  } else {
    res.status(404).send('Building not found');
  }
});

// Endpoint to get the list of all buildings
app.get('/buildings', (req, res) => {
  res.json(buildings);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
