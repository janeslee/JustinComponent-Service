import React, { Component } from 'react';

class SoundStats extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      <span>{this.props.stats[0]} </span>
      <span> <button>{this.props.stats[1]} </button>
      </span><span> <button>{this.props.stats[2]}</button></span>
      <span>{this.props.stats[3]}</span>
    </div>
    )
  }

}
export default SoundStats;