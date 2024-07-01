const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let buildings = {
  1: { id: 1, slots: 0 },
  2: { id: 2, slots: "SOON" },
  3: { id: 3, slots: "SOON" },
  4: { id: 4, slots: "SOON" },
  5: { id: 5, slots: "SOON" }
};

// Endpoint to update the number of empty slots for Building 1
app.post('/update-slots', (req, res) => {
    buildings[1].slots = req.body.slots;
    res.send('Data received');
});

// Endpoints to get the number of empty slots for each building
app.get('/slots/:buildingId', (req, res) => {
    const buildingId = parseInt(req.params.buildingId, 10);
    const building = buildings[buildingId];
    if (building) {
        res.json(building);
    } else {
        res.status(404).send('Building not found');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

