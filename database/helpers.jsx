const mysql = require('mysql');
const mysqlConfig = require('./config.js');
const db = mysql.createConnection(mysqlConfig);
const faker = require('faker');

//api/db test
const getArtist = (callback) => {
  db.query(`select * from tracks`, (err, results, fields) => {
    if(err) return console.log(err);
    callback(null, results);
  });
};


//how do I determine if tracks are related? If they're in the same album AND playlist?

//randomize likes, shares, plays, and comments for each track
let getRandomInt = (max) =>{
  return Math.floor(Math.random() * Math.floor(max));
};

let plays = getRandomInt(8000000);
let likes = getRandomInt(12000000);
let shares = getRandomInt(200000);
let comments = getRandomInt(40000);

//100 tracks
let tracks = [];
for(let i = 0; i < 100; i++){
  tracks.push(faker.company.bs());
}

//10 artists, albums, and playlists
let artists = [];
let albums = [];
let playlists = [];
let albumArt = [];

for(i = 0; i< 10; i++){
  playlists.push(faker.company.catchPhrase());
  albums.push(faker.commerce.product());
  albumArt.push(faker.random.image());
  artists.push(`The ${faker.company.bsAdjective()} ${faker.name.findName()}`);
}

//assign ten tracks to each album, without repeating

//assign ten tracks to each playlist, 
  //allowing only up to three from any given album in a playlist



//create 100 random tracks
// for(let i = 0; i < 100; i++){
// db.query(`INSERT INTO tracks (artist, track, album, 
//   playlistsIn, plays, likes, shares, comments) VALUES ()`,)

// }
//create 10 random albums to put the tracks in
//db.query(`INSERT INTO playlists (playlistID, playlist, trackIDs) VALUES ()`);
  
//create a 10 random playlists to put tracks in 
  //from each album no more than 3 tracks allowed
//db.query(`INSERT INTO albums (albumID, album, trackIDs) VALUES ()`);


// const getAllTracks = function(callback) {
//   db.query('SELECT * from trackInfo', (err, results, fields) => {
//     if(err)callback(err, null);
//     callback(null, results);
//   })
// };

// const getAllPlaylists = function(callback) {
//   db.query('SELECT * from playlists', (err, results, fields) => {
//     if(err)callback(err, null);
//     callback(null, results);
//   })
// };

// const updateLikesShares = function(category, callback) {
//   db.query(`INSERT INTO trackInfo (${category})`, (err, results, fields) => {

//     if(err)callback(err, null);
//     callback(null, results);

//   })
// };

module.exports = {
  getArtist
  // getAllTracks,
  // getAllPlaylists,
  // updateLikesShares
};
