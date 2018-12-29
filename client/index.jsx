import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Sources from './src/components/sources.jsx';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTrack: {
        id: '',
        artist: '',
        track: '',
        album: '',
        playlistsIn: '',
        plays: '',
        likes: '',
        shares: '',
        comments: ''
      },
      //get related tracks how? in album AND playlist together?
      //query DB - select * where {currentTrack.album = album && currPlaylist = playlist}
      //add found items to related tracks
      //if there are less than three found, or none
        //query DB and
        //get tracks from track artist 
        //until there are three related tracks (while relatedTracks.length <= 3)
      //we have a selected current track (for this case it is randomized)
      //we pull the top three playlists && albums it is in,
      //sorted by likes, from the DB 
      //
      relatedTracks: [],
      playlists: [],
      albums: {
        album: "",
        artist: "",
        comments: null,
        likes: null,
        playlistsIn: null,
        plays: null,
        shares: null,
        track: ""
      },
      sharedBy: []
    };
  }
  componentDidMount() {
    this.getRelatedTracks();
  }

  getRelatedTracks() {
    axios.get('/api/tracks')
      .then(res => {
        this.setState({ albums: res.data[0] });
      })
      .catch(err => console.log('get err: ', err));
  }

  render() {
    return (
      <div><Sources trackInfo={this.state}/></div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));