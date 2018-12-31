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
  
  handleClick(item){
    let clicked = false;
    if(clicked === false){
      item+=1;
      clicked = true;
    }else{
      item-=1;
      clicked = false
    }
  }

  render() {
    return (
      <div><Sources /></div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));