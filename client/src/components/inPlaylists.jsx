import React, { Component } from 'react';
import SoundStats from './soundStats.jsx';

class InPlaylists extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ margin: 5, width: 300 }}>
        <div style={{ display: 'flex', flexDirection: 'row', color: 'gray', borderBottom: 'solid', borderWidth: 1 }}>
          <span style={{ flex: 1 }}>Playlists</span><span>View All</span>
        </div>

        <ul style={{ listStyle: 'none', margin: 0, padding: 0, paddingTop: 5 }}>
          {this.props.plists.map(track => {
            let background = track.albumArt;
            return (
              <li style={{width:300, height:72.19}}>
                <div style={{ display: 'flex', flexDirection: 'row', width: 306, height: 62.19 }}>
                  <span style={{ flex: 1,width: 62, height: 60 }}>
                    <div style={{ backgroundImage: `url(${background})`, width: 50, height: 50, opacity: 1 }} />
                  </span>

                  <div style={{ flex: 3 }}>
                    <div style={{color: 'gray'}}>{track.artist}</div>
                    <div>{track.track}</div>
                    <SoundStats stats={[track.plays, track.likes, track.shares, track.comments]} />
                  </div>
                </div>
              </li>
            )
          })
          }
        </ul>
      </div>
    )

  }

}

export default InPlaylists;