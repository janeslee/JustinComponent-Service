import React, { Component } from 'react';
import RelatedTracks from './relatedTracks.jsx';
import InPlaylists from './inPlaylists.jsx';
import InAlbums from './inAlbums.jsx';

class Sources extends React.Component {
    constructor(props) {
        super(props);
    }
    //componentDidUpdate

    render() {
   
        return (<div>
            <RelatedTracks />
            <InPlaylists />
            <InAlbums /> 
            </div>)
    }
}
export default Sources;

