import React, { Component } from 'react';
import SoundStats from './soundStats.jsx';

class InAlbums extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    let background = this.props.currentTrack.albumArt;
    return (
      // component container 
      <div style={{ margin: 5, width: 300 }}>
      
      {/* component header */}
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <span style={{ flex: 1 }}><h4>Albums</h4></span><span style={{ }}><h4> View All</h4></span>
        </div>

        {/* album li container */}
        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
         
         {/* album li object */}
          <li style={{width:300, height:72.19}}>
            {/* album art */}
            <div style={{ display: 'flex', flexDirection: 'row', width: 306, height: 62.19 }} >
              <span style={{ flex: 1, width: 62, height: 60}}>
                <div style={{ backgroundImage: `url(${background})`, width: 50, height: 50, opacity: 1 }} />
              </span>
            {/* album information */}
              <div style={{ flex: 3}}>
                <div style={{color: 'gray'}}>{this.props.currentTrack.artist}</div>
                <div><span>{this.props.currentTrack.track}</span></div>
                <SoundStats stats={[this.props.currentTrack.plays, this.props.currentTrack.likes, this.props.currentTrack.shares, this.props.currentTrack.comments]} />
              </div>

            </div>

          </li>

        </ul>
      </div>
    )

  }

}

export default InAlbums;