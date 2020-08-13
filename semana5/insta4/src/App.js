import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'greg'}
          fotoUsuario={'https://images.uncyc.org/pt/thumb/a/a4/Alpaca.jpg/220px-Alpaca.jpg'}
          fotoPost={'https://s3.amazonaws.com/ogden_images/www.lockhaven.com/images/2019/03/05214950/Huacaya-Alpacas.jpg'}
        />

        <Post
          nomeUsuario={'reysla'}
          fotoUsuario={'https://media.gazetadopovo.com.br/vozes/2012/11/chow_chow-53764208.jpg'}
          fotoPost={'https://64.media.tumblr.com/50a3959ae18cf668a08761f3f6bf4741/tumblr_pq7wjzVHio1qj69eg_540.png'}
        />
      </div>
    );
  }
}

export default App;
