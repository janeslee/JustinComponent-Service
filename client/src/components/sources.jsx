import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Sources extends React.Component {
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
      //get related tracks how? in album AND playlist together?
      //query DB - select * where {currentTrack.album = album && currPlaylist = playlist}
      //add found items to related tracks
      //if there are less than three found, or none
        //query DB and
        //get tracks from track artist 
        //until there are three related tracks (while relatedTracks.length <= 3)
      //we have a selected current track (for this case it is randomized)
      //we pull the top three playlists && albums it is in,
      //sorted by likes, from the DB 
      //
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
    //componentDidUpdate

    render() {
        console.log('sources props', this.props.trackInfo);
        if(this.props.albums){
        return (<div>
            <div><span>Related Tracks ||</span><span> View All</span></div>
            <div>{this.props.albums.artist}</div>
            <div><span>Album Art |</span><span>| {this.props.albums.track}</span></div>
            <div><span>Plays ||</span><span> Likes ||</span><span> Shares ||</span><span> Comments</span></div>
            </div>)
        }
    }
}
export default Sources;

