import React, { Component } from 'react';

class InAlbums extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    let background = this.props.currentTrack.albumArt;
    return (
      <div><span>Albums ||</span><span> View All</span>
        <ul style={{listStyle: 'none', margin: 0, padding: 0}}>

          <li>
            <div style={{display: 'flex', flexDirection: 'row'}} >
              <span style={{flex: 1}}>
                <div style={{ backgroundImage: `url(${background})`, width: 50, height: 50, opacity: 1 }} />
              </span>

              <div style={{flex: 9}}>
                <div>{this.props.currentTrack.artist}</div>
                <div><span>{this.props.currentTrack.track}</span></div>
                <div><span>{this.props.currentTrack.plays} ||</span><span> <button>{this.props.currentTrack.likes} </button>||</span><span> <button>{this.props.currentTrack.shares}</button> ||</span><span>{this.props.currentTrack.comments}</span></div>
              </div>

            </div>

          </li>

        </ul>
      </div>
    )

  }

}

export default InAlbums;