import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Sources from './src/components/sources.jsx';
import axios from 'axios';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            tracks : [],
            playlists: []
        }
    }

    
    render(){
    return(<div>
    <div>Hello There</div>
    <div><Sources tracks={this.state.tracks} playlists={this.state.playlists}/></div>
    </div>)
    }
}

ReactDOM.render(<App />, document.getElementById('app'));