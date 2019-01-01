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

    render() {
        console.log('sources props', this.props)
        return (<div>
            <RelatedTracks relatedTracks={this.props.relatedTracks} areTracks={this.state.areRelatedTracks}/>
            <InPlaylists arePlaylists={this.state.arePlaylists}/>
            <InAlbums areAlbums={this.state.areAlbums}/> 
            </div>)
    }

}
export default Sources;

