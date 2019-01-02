import React, { Component } from 'react';


class InPlaylists extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div><span>Playlists ||</span><span> View All</span>
        <ul style={{listStyle: 'none', margin: 0, padding: 0}}>
          {this.props.relatedTracks.map(track => {
            let background = track.albumArt;
            return (
              <li>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                  <span style={{ flex: 1 }}>
                    <div style={{ backgroundImage: `url(${background})`, width: 50, height: 50, opacity: 1 }} />
                  </span>

                  <div style={{ flex: 9 }}>
                    <div>{track.artist}</div>
                    <div>{track.track}</div>
                    <div><span>{track.plays} ||</span><span> <button>{track.likes} </button>||</span><span> <button>{track.shares}</button> ||</span><span>{track.comments}</span></div>
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