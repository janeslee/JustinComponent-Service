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
let likes = getRandomInt(230000);
let shares = getRandomInt(200000);
let comments = getRandomInt(40000);

//100 tracks
let tracks = [];
//10 artists, albums, and playlists
let artists = [];
let albums = [];
let playlists = [];
let albumArt = [];
//make that
for(let i = 0; i < 100; i++){
  if (i < 10) {
    playlists.push(faker.company.catchPhrase());
    albums.push(faker.commerce.product());
    albumArt.push(faker.random.image());
    artists.push(`The ${faker.company.bsAdjective()} ${faker.name.findName()}`);
  }
  tracks.push(faker.company.bs());
}

//assign ten tracks to each album, without repeating
for(let i = 0; i < tracks.length; i++){
  //reference for current album to push tracks into
  let currAlbum = 0;
  let ranTrack = getRandomInt(tracks.length);
  let currTrack = tracks[i];
  //if there are 10 tracks on an album, go to the next one
  if(albums[currAlbum].length === 10)currAlbum++;
  //push track onto current album
  playlists[currAlbum].push(tracks[ranTrack]);
  albums[currAlbum].push(currTrack);
}

//add tracks/playlists/albums to db
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
