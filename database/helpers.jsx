const mysql = require('mysql');
const mysqlConfig = require('./config.js');
const connection = mysql.createConnection(mysqlConfig);

const faker = require('faker');

const getAllTracks = function(callback) {
  connection.query('SELECT * from trackInfo', (err, results, fields) => {
    if(err)callback(err, null);
    callback(null, results);
  })
};

const getAllPlaylists = function(callback) {
  connection.query('SELECT * from playlists', (err, results, fields) => {
    if(err)callback(err, null);
    callback(null, results);
  })
};

const updateLikesShares = function(category, callback) {
  connection.query(`INSERT INTO trackInfo (${category})`, (err, results, fields) => {

    if(err)callback(err, null);
    callback(null, results);

  })
};

module.exports = {
  getAllTracks,
  getAllPlaylists,
  updateLikesShares
};
