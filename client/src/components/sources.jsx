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
        return (<div style={{display: 'flex', flexDirection: 'column'}}>
            <RelatedTracks style={{flex:1}} relatedTracks={this.props.relatedTracks} areTracks={this.state.areRelatedTracks}/>
            <InPlaylists style={{flex:1}} relatedTracks={this.props.relatedTracks} arePlaylists={this.state.arePlaylists}/>
            <InAlbums style={{flex:1}} currentTrack={this.props.currentTrack} areAlbums={this.state.areAlbums}/> 
            </div>)
    }

}
export default Sources;

