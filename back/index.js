const express = require('express');
const app = express();
const cors = require('cors')
app.use(express.json());
app.use(cors());

app.post('/', (req, res) => {
    console.log(req.headers);
    res.body = {state: req.body.name}
    res.status(200).send(res.body);
});

app.listen(3000, () => console.log('Listening on port 3000...'));