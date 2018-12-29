//const getTrackData = require('./database/helpers.jsx').getTrackData;
//const updateTrackData = require('./database/helpers.jsx').updateTrackData;
const getArtist = require('../database/helpers.jsx').getArtist;
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.post('/api/tracks', (req, res) => {
  let user = req.body;
  console.log('posting at server: ', req.body);
  // getTrackData(user, (error, data) => {
  //   if(error) {return error}
  //   updateTrackData();
  // });
});

app.get('/api/tracks', (req, res) => {
  getArtist((err, data) => {
    if (err) return err;
    res.send(data);
  });
});

let port = 3001;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
