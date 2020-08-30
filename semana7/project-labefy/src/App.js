import React from 'react';
import './App.css';
import PlaylistsPage from './components/PlaylistsPage/PlaylistsPage'
import PlaylistDetailPage from './components/PlaylistDetailsPage/PlaylistDetailPage';

export default class App extends React.Component {
  state = {
    currentPage: "playlistsPage"
  }

  changePage = () => {
    this.state.currentPage === "playlistsPage"
    ? this.setState({currentPage: "playlistDetailsPage"})
    : this.setState({currentPage: "playlistsPage"})
  }
  
  render() {
    const showCurrentPage = () => {
      if (this.state.currentPage === "playlistsPage") {
        return (
          <PlaylistsPage
            onClickPlaylist={this.changePage}
          />
        )
      } else if (this.state.currentPage === "playlistDetailsPage") {
        return <PlaylistDetailPage/>
      }
    }

    return (
      <div className="App">
          {showCurrentPage()}
      </div>
    );
  }
}
