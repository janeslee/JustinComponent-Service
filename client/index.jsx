import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Sources from './src/components/sources.jsx';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTrack: {}
    };
  }
  componentDidMount() {
    this.getRelatedTracks();
  }
  
  getRelatedTracks() {
    axios.get('/api/tracks')
      .then(res => {
        console.log('api res', res.data);
        this.setState({ 
          currentTrack: res.data.currentTrack,
          relatedTracks: res.data.relTracks
        });
      })
      .catch(err => console.log('get err: ', err));
  }
  
  render() {
    return (
      <div><Sources currentTrack={this.state.currentTrack} relatedTracks={this.state.relatedTracks}/></div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));