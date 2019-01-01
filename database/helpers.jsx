const faker = require('faker');
const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const db = mysql.createConnection(mysqlConfig);

// randomize likes, shares, plays, and comments for each track
const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const plays = getRandomInt(8000000);
const likes = getRandomInt(230000);
const shares = getRandomInt(200000);
const comments = getRandomInt(40000);

// 100 tracks
const tracks = [];
// 10 artists, albums, and album arts
const artists = [];
const albums = [];
const albumArt = [];

// make it all
for (let i = 0; i < 100; i += 1) {
  if (i < 10) {
    albums.push(`${faker.commerce.product()} ${faker.commerce.product()} ${faker.commerce.product()}`);
    albumArt.push(faker.random.image());
    artists.push(`The ${faker.company.bsAdjective()} ${faker.name.findName()}`);
  }
  tracks.push(faker.company.bs());
}

// add tracks/playlists/albums to db
db.query('SELECT * from tracks', (err, res) => {
  if (err) { return err; }
  if (res.length < 100) {
    for (let i = 0; i < 100; i += 1) {
      db.query(`INSERT INTO tracks (artist, track, album, albumArt, 
        plays, likes, shares, comments) VALUES ('${artists[getRandomInt(9)]}', '${tracks[i]}', 
        '${albums[getRandomInt(9)]}', '${albumArt[getRandomInt(9)]}', ${plays}, ${likes}, ${shares}, ${comments})`);
    }
  }
});

const getTracks = (callback) => {
  db.query('SELECT * from tracks', (err, results) => {
    if (err) callback(err, null);
    callback(null, results);
  });
};

const sortTracks = (data) => {
  const currentTrack = data[0];
  const relatedTracks = [];
  for (let i = 1; i < data.length; i += 1) {
    if (data[i].album === currentTrack.album && relatedTracks.length < 3) {
      relatedTracks.push(data[i]);
    }
  }
  const filteredData = {
    currTrack: currentTrack,
    relTracks: relatedTracks,
  };
  return filteredData;
};

module.exports = {
  getTracks,
  sortTracks,
};
