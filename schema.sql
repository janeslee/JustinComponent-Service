DROP DATABASE IF EXISTS fecTracks;

CREATE DATABASE fecTracks;

use fecTracks;

CREATE TABLE trackInfo (user VARCHAR(20), track VARCHAR(20),
album VARCHAR(20), playlistsIn VARCHAR(50), plays int, likes int, shares int, comments int);


CREATE TABLE playlists ( playlistID int NOT NULL AUTO_INCREMENT PRIMARY KEY, playlist varchar(50), trackIDs int NOT NULL);

INSERT INTO trackInfo (user, track, album) VALUES ('jd', 'hallabungai', 'bunga1');