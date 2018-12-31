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
      sharedBy: [],
      likedBy: []
    };
  }
  componentDidMount() {
    this.getRelatedTracks();
  }
  
  getRelatedTracks() {
    axios.get('/api/tracks')
      .then(res => {
        console.log('api res', res.data);
        this.setState({ albums: res.data[0] });
      })
      .catch(err => console.log('get err: ', err));
  }
  
  render() {
    return (
      <div><Sources /></div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));