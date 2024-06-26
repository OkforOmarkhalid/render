const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

let emptySlots = 0;

app.post('/update-slots', (req, res) => {
    emptySlots = req.body.slots;
    res.send('Data received');
});

app.get('/slots', (req, res) => {
    res.json({ slots: emptySlots });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
