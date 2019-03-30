const fs = require('fs');
const express = require('express');
const app = express();
const cors = require('cors')
app.use(express.json());
app.use(cors());

app.post('/', (req, res) => {
    console.log(req.headers);
    console.log(req.body);
    fs.appendFile('messages.txt', JSON.stringify(req.body) + '\r\n', function (err) {
        if (err) throw err;
        console.log('Saved!');
        res.status(200).send({ last_added: req.body });// send res's body
    });
});

app.listen(3000, () => console.log('Listening on port 3000...'));