const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let emptySlots = 6;
const id = 1;  // Static ID

app.post('/update-slots', (req, res) => {
    emptySlots = req.body.slots;
    res.send('Data received');
});

app.get('/slots', (req, res) => {
    res.json({ id: id, slots: emptySlots });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
