const express = require('express'); // Import the Express framework for building web applications
const bodyParser = require('body-parser'); // Import body-parser to parse JSON request bodies
const app = express(); // Create an instance of an Express application
const PORT = process.env.PORT || 3000; // Define the port to run the server on

app.use(bodyParser.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies
app.use(bodyParser.json()); // Middleware to parse JSON bodies

// Initialize the buildings array
let buildings = [
  { id: 1, slots: 0 },
  { id: 2, slots: "SOON" },
  { id: 3, slots: "SOON" },
  { id: 4, slots: "SOON" },
  { id: 5, slots: "SOON" }
];

// Endpoint to update the number of empty slots for a specific building
app.post('/update-slots/:buildingId', (req, res) => {
    const buildingId = parseInt(req.params.buildingId, 10); // Parse the buildingId from the URL parameter
    const building = buildings.find(b => b.id === buildingId); // Find the building with the given ID
    if (building) { // If the building is found
        building.slots = req.body.slots; // Update the slots value with the data from the request body
        res.send(`Data received for Building ${buildingId}`); // Send a response back to the client
    } else {
        res.status(404).send('Building not found'); // If the building is not found, send a 404 error
    }
});

// Endpoint to get the number of empty slots for a specific building
app.get('/slots/:buildingId', (req, res) => {
    const buildingId = parseInt(req.params.buildingId, 10); // Parse the buildingId from the URL parameter
    const building = buildings.find(b => b.id === buildingId); // Find the building with the given ID
    if (building) { // If the building is found
        res.json(building); // Send the building data as a JSON response
    } else {
        res.status(404).send('Building not found'); // If the building is not found, send a 404 error
    }
});

// Endpoint to get the list of all buildings
app.get('/buildings', (req, res) => {
    res.json(buildings); // Send the entire buildings array as a JSON response
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); // Start the server and log the port it is running on
});
