import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Sources from './src/components/sources.jsx';
//import axios from 'axios';
const faker = require('faker');

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            tracks : [],
            playlists: [],
            img: faker.image.nightlife()
        }
    }

    
    render(){
    return(<div>
    <div>{this.state.img}</div>
    <div><Sources tracks={this.state.tracks} playlists={this.state.playlists}/></div>
    </div>)
    }
}

ReactDOM.render(<App />, document.getElementById('app'));