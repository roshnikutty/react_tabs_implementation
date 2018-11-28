import React, { Component } from 'react';
import Tabs from './Tabs';
import Pane from './Pane';
import './App.css';
import dummyData from './dummy_data';

class App extends Component {
	render () {
  	return (
    	<div>
        <Tabs selected={0}>
          <Pane label="Tab 1">
            <div>{dummyData[0]}</div>
          </Pane>
          <Pane label="Tab 2">
            <div>{dummyData[1]}</div>
          </Pane>
          <Pane label="Tab 3">
            <div>{dummyData[0]}</div>
          </Pane>
        </Tabs>
      </div>
    );
  }
};

export default App;
