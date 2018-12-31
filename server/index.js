
const getTracks = require('../database/helpers.jsx').getTracks;
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../client/dist`));

app.get('/api/tracks', (req, res) => {
  getTracks((err, data) => {
    if (err) return err;
    res.send(data);
  });
});

const port = 3001;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
