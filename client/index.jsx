import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Sources from './src/components/sources.jsx';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: [],
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
      }
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
    console.log(this.state.albums);
    return (<div>
      <div><span>Related Tracks ||</span><span> View All</span></div>
      <div>{this.state.albums.artist}</div>
      <div><span>Album Art |</span><span>| {this.state.albums.track}</span></div>
      <div><span>Plays ||</span><span> Likes ||</span><span> Shares ||</span><span> Comments</span></div>
      <div><Sources tracks={this.state.tracks} playlists={this.state.playlists} /></div>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));