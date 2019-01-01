import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Sources from './src/components/sources.jsx';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       currentTrack: null,
       relatedTracks: null  
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
          currentTrack: res.data.currTrack,
          relatedTracks: res.data.relTracks
        });
      })
      .catch(err => console.log('get err: ', err));
  }
  
  render() {
    if(this.state.currentTrack === null){
      return (<div>Loading ...</div>)
    } else {  
      return (
      <div><Sources currentTrack={this.state.currentTrack} relatedTracks={this.state.relatedTracks}/></div>
      )
  }
  
  }
}

ReactDOM.render(<App />, document.getElementById('app'));