import React from 'react';
import Navigator from './components/Navigator.js'

export default class App extends React.Component {
  render() {
    return (
      <Navigator />
      // Navigator placed in Navigator.js contains all the paths to different components
    )
  }
}