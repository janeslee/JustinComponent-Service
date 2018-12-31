import React, { Component } from 'react';

class InAlbums extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (<div>
      <div><span>Albums ||</span><span> View All</span></div>
      <div>Current Artist</div>
      <div><span>Album Art |</span><span>| Current Track</span></div>
      <div><span>Plays ||</span><span> <button>Likes </button>||</span><span> <button>Shares</button> ||</span><span> Comments</span></div>
      </div>)
  }

}

export default InAlbums;