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
  
      let repos = [];
      data.forEach(repo => {
        repos.push({
          repoName: repo.name,
          repoID: repo.id,
          forks: repo.forks,
          repoURL: repo.html_url
        });
      });
      updateTrackData(repos);
    });
  });
  
  app.get('/trackStats', (req, res) => {
  
    getTrackStats((err, data) => {
  
      data.sort((a, b)=>{
          if(a.forks > b.forks)return -1;
          if(a.forks < b.forks)return 1;
          return 0;
        });
      while(data.length > 25){
        data.pop();
      }
      res.send(data);
  
    });
  
  });
  
  let port = 1128;
  
  app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
  