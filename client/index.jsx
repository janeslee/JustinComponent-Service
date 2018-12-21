import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Sources from './src/components/sources.jsx';

class App extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
    <div>
    <div>Hello There</div>
    <div><Sources /></div>
    </div>
    }
}

ReactDOM.render(<App />, document.getElementById('app'));