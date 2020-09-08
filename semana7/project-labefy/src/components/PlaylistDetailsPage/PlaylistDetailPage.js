import React from 'react';
import axios from 'axios';
import { baseUrl, headers } from '../axiosConfig/axios-config';
import PlaylistsPage from '../PlaylistsPage/PlaylistsPage';

class PlaylistDetailPage extends React.Component {
    
    returnToPlaylistsPage = () => {
        this.props.onBackButtonClick()
    }

    render() {
        return (
            <div>
                <button onClick={this.returnToPlaylistsPage}>Voltar para suas playlists</button>
                <p><strong>Adicione suas músicas</strong></p>
                <input placeholder="Nome da música"></input>
                <input placeholder="Artistas"></input>
                <input placeholder="Link da música"></input>
                <button>Adicionar</button>
                <h3>Título da playlist</h3>
                <ul>
                    <li>música 1</li>
                    <li>música 2</li>
                </ul>
            </div>
        )
    }
}

export default PlaylistDetailPage