import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Sources extends React.Component {
    constructor(props) {
        super(props);
    }
    //componentDidUpdate

    render() {
        console.log('sources props', this.props.trackInfo);
   
        return (<div>
            <div><span>Related Tracks ||</span><span> View All</span></div>
            <div>Current Artist</div>
            <div><span>Album Art |</span><span>| Current Track</span></div>
            <div><span>Plays ||</span><span> <button>Likes </button>||</span><span> <button>Shares</button> ||</span><span> Comments</span></div>
            </div>)
        
    }
}
export default Sources;

