DROP DATABASE IF EXISTS fecTracks;

CREATE DATABASE fecTracks;

use fecTracks;

CREATE TABLE tracks (artist VARCHAR(100), track VARCHAR(100),
  album VARCHAR(100), playlistsIn VARCHAR(100), 
  plays int, likes int, shares int, comments int);

CREATE TABLE playlists ( playlistID int NOT NULL AUTO_INCREMENT PRIMARY KEY, 
  playlist varchar(50), trackIDs int NOT NULL);
  
CREATE TABLE albums ( albumID int NOT NULL AUTO_INCREMENT PRIMARY KEY, 
  album varchar(50), trackIDs int NOT NULL);

INSERT INTO tracks (artist, track, album) VALUES ('Re-contextualized heuristic initiatives', 'Mandatory systemic relationships', 'Reduced optimizing experiences');
