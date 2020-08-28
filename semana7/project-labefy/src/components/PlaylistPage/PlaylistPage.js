import React from 'react';
import axios from 'axios';

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"; 
const headers = {headers: {Authorization: "gregory-mendes-jackson"}};

class PlaylistPage extends React.Component {
    state = {
        playlists: [],
        playlistNameValue: ""
    }
    
    getAllPlaylists = () => {
        axios.get(baseUrl, headers)
        .then((response) => {
            this.setState({playlists: response.data.result.list})
        })
        .catch((error) => {
            console.log(error)
        });
    }

    componentDidMount() {
        this.getAllPlaylists();
    }
    
    createNewPlaylist = () => {
        const body = {
            name: this.state.playlistNameValue
        };

        axios.post(baseUrl, body, headers)
        .then((response) => {
            window.alert(`A playlist ${this.state.playlistNameValue} foi criada com sucesso!`)
            this.setState({playlistNameValue: ""})
        })
        .catch((error) => {
            window.alert("Você já criou uma playlist com este nome.")
        });
    }

    onChangePlaylistNameValue = (event) => {
        this.setState({playlistNameValue: event.target.value});
    }
    
    render() {
        const showPlaylists = this.state.playlists.map((playlistName) => {
            return (
                <p key={playlistName.id}>
                    {playlistName.name}
                </p>
            )
        })

        console.log(this.state.playlists)

        return (
            <div>
                <input placeholder="Nome da nova playlist" onChange={this.onChangePlaylistNameValue}/>
                <button onClick={this.createNewPlaylist}>Criar</button>
                <h2>Suas Playlists:</h2>
                {showPlaylists}
            </div>
        );
    }
}

export default PlaylistPage