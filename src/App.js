import React, { Component } from 'react';
import Tabs from './Tabs';
import Pane from './Pane';
import './App.css';

class App extends Component {
	render () {
  	return (
    	<div>
        <Tabs selected={0}>
          <Pane label="Tab 1">
            <div>This is my tab 1 contents!</div>
          </Pane>
          <Pane label="Tab 2">
            <div>This is my tab 2 contents!</div>
          </Pane>
          <Pane label="Tab 3">
            <div>This is my tab 3 contents!</div>
          </Pane>
        </Tabs>
      </div>
    );
  }
};

export default App;
