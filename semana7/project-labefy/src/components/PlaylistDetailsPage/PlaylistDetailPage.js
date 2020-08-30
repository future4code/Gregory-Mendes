import React from 'react';
import axios from 'axios';
import { baseUrl, headers } from '../axiosConfig/axios-config';
import PlaylistsPage from '../PlaylistsPage/PlaylistsPage';

class PlaylistDetailPage extends React.Component {
    
    render() {
        return (
            <div>
                <button>Voltar para suas playlists</button>
                <h1>Título da playlist</h1>
                <ul>
                    <li>música 1</li>
                    <li>música 2</li>
                </ul>
            </div>
        )
    }
}

export default PlaylistDetailPage