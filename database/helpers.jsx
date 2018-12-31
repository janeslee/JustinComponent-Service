const mysql = require('mysql');
const mysqlConfig = require('./config.js');
const db = mysql.createConnection(mysqlConfig);
const faker = require('faker');

// randomize likes, shares, plays, and comments for each track
let getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

let plays = getRandomInt(8000000);
let likes = getRandomInt(230000);
let shares = getRandomInt(200000);
let comments = getRandomInt(40000);

// 100 tracks
let tracks = [];
// 10 artists, albums, and album arts
let artists = [];
let albums = [];
let albumArt = [];

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
db.query(`SELECT * from tracks`, (err, res) => {
  if (err) { console.log(err); }
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

module.exports = {
  getTracks,
};
