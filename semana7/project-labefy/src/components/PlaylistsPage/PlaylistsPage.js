import React from 'react';
import axios from 'axios';
import { baseUrl, headers } from '../axiosConfig/axios-config';

class PlaylistsPage extends React.Component {
    state = {
        playlists: [],
        playlistNameValue: ""
    }
    
    getAllPlaylists = async () => {
        try {
            const response = await axios.get(baseUrl, headers)
            this.setState({playlists: response.data.result.list})
        } catch (error) {
            console.log(error.message)
        };
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
            this.setState({playlistNameValue: ""});
        })
        .catch((error) => {
            for (let playlist of this.state.playlists) {
                if (this.state.playlistNameValue === playlist.name) {
                    window.alert("Você já criou uma playlist com esse nome!");
                }
            }

            window.alert("Ocorreu um erro! Tente novamente.")
        });
    }

    onChangePlaylistNameValue = (event) => {
        this.setState({playlistNameValue: event.target.value});
    }

    deletePlaylist = (playlistId) => {
        const confirmDeletion = window.confirm("Tem certeza que deseja excluir esta playlist?")

        if (confirmDeletion) {
            axios.delete(`${baseUrl}/${playlistId}`, headers)
            .then ((response) => {
                this.getAllPlaylists()
            })
            .catch ((error) => {
                window.alert("Ocorreu um erro na deleção da playlist! Tente novamente.")
            })
        }
    }

    onPlaylistClick = () => {
        this.props.onClickPlaylist()
    }
    n
    render() {
        const showPlaylists = this.state.playlists.map((playlist) => {
            return (
                <p key={playlist.id} onClick={this.onPlaylistClick}>
                    {playlist.name}
                    <button onClick={() => this.deletePlaylist(playlist.id)}>Excluir</button>
                </p>
            )
        })

        return (
            <div>
                <input value={this.state.playlistNameValue} placeholder="Nome da nova playlist" onChange={this.onChangePlaylistNameValue}/>
                <button onClick={this.createNewPlaylist}>Criar</button>
                <h2>Suas Playlists:</h2>
                {showPlaylists}
            </div>
        );
    }
}

export default PlaylistsPage