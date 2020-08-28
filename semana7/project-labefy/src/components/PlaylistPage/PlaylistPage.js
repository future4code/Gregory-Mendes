import React from 'react';
import axios from 'axios';

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"; 
const headers = {headers: {Authorization: "gregory-mendes-jackson"}};

class PlaylistPage extends React.Component {
    state = {
        playlists: [],
        playlistNameValue: ""
    }

    createNewPlaylist = () => {
        const body = {
            name: this.state.playlistNameValue
        }

        axios.post(baseUrl, body, headers)
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    onChangePlaylistNameValue = (event) => {
        this.setState({playlistNameValue: event.target.value})
    }

    getAllPlaylists = () => {
        axios.get(baseUrl, headers)
    }
    
    render() {
        return (
        <div className="App">
            <input placeholder="Nome da nova playlist" onChange={this.onChangePlaylistNameValue}/>
            <button onClick={this.createNewPlaylist}>Criar</button>
            <h2>Suas Playlists:</h2>
            <p>{this.state.playlists}</p>
        </div>
        );
    }
}

export default PlaylistPage