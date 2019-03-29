const express = require('express');
const app = express();

app.use(express.json());

app.post('/', (req, res) => {
    res.send({state: req.body.name});
});

app.listen(3000, () => console.log('Listening on port 3000...'));