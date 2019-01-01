const express = require('express');
const bodyParser = require('body-parser');

const getTracks = require('../database/helpers.jsx').getTracks;
const sortTracks = require('../database/helpers.jsx').sortTracks;

const app = express();

app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../client/dist`));

app.get('/api/tracks', (req, res) => {
  getTracks((err, data) => {
    if (err) return err;
    console.log('sortTracks data ', data);
    const sortedData = sortTracks(data);
    console.log('server side data, sorted', sortedData);
    res.send(sortedData);
  });
});

const port = 3001;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
