import React, { Component } from 'react';
import RelatedTracks from './relatedTracks.jsx';
import InPlaylists from './inPlaylists.jsx';
import InAlbums from './inAlbums.jsx';

class Sources extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          areRelatedTracks: false,
          arePlaylists: false,
          areAlbums: false
        };
    }
    //componentDidUpdate(){
    // if props contains related tracks, playlists, or albums,
    // set state to true
    // else state to false for each one that doesnt
    //}

    render() {
   
        return (<div>
            <RelatedTracks areTracks={this.state.areRelatedTracks}/>
            <InPlaylists arePlaylists={this.state.arePlaylists}/>
            <InAlbums areAlbums={this.state.areAlbums}/> 
            </div>)
    }
}
export default Sources;

