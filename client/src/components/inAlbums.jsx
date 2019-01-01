import React, { Component } from 'react';

class InAlbums extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div><span>Albums ||</span><span> View All</span>
        <div>
          <div>{this.props.currentTrack.artist}</div>
          <div><span>{this.props.currentTrack.albumArt} |</span><span>| {this.props.currentTrack.track}</span></div>
          <div><span>{this.props.currentTrack.plays} ||</span><span> <button>{this.props.currentTrack.likes} </button>||</span><span> <button>{this.props.currentTrack.shares}</button> ||</span><span>{this.props.currentTrack.comments}</span></div>
        </div>
      </div>
    )

  }

}

export default InAlbums;