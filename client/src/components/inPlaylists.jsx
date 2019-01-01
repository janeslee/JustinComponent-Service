import React, { Component } from 'react';


class InPlaylists extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div><span>Playlists ||</span><span> View All</span>
      {this.props.relatedTracks.map(track => {
        return (
          <div>
          <div>{track.artist}</div>
          <div><span>{track.albumArt} |</span><span>| {track.track}</span></div>
          <div><span>{track.plays} ||</span><span> <button>{track.likes} </button>||</span><span> <button>{track.shares}</button> ||</span><span>{track.comments}</span></div>
          </div>
        )
      })
      }
      </div>
    )
    
  }

}

export default InPlaylists;