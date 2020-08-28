import React from 'react';
import './App.css';
import PlaylistPage from './components/PlaylistPage/PlaylistPage'

export default class App extends React.Component {
  render () {
    return (
      <div className="App">
        <PlaylistPage/>
      </div>
    );
  }
}
