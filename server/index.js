//const getTrackData = require('./database/helpers.jsx').getTrackData;
//const updateTrackData = require('./database/helpers.jsx').updateTrackData;

const express = require('express');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: false
  }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.post('/trackStats', (req, res) => {
    let user = req.body.user;
  
    getTrackData(user, (error, data) => {
      if(error) {return error}
  
      
      updateTrackData();
    });
  });
  
  app.get('/trackStats', (req, res) => {
  
    getTrackStats((err, data) => {
  
      res.send(data);
  
    });
  
  });
  
  let port = 3001;
  
  app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
  