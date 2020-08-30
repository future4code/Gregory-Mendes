import React from 'react';
import './App.css';
import PlaylistsPage from './components/PlaylistsPage/PlaylistsPage'

export default class App extends React.Component {
  render () {
    return (
      <div className="App">
        <PlaylistsPage/>
      </div>
    );
  }
}
