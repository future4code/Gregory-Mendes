import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  state = {
    posts: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario:'https://picsum.photos/50/50',
        fotoPost:'https://picsum.photos/200/150'
      },

      {
        nomeUsuario:'greg',
        fotoUsuario:'https://images.uncyc.org/pt/thumb/a/a4/Alpaca.jpg/220px-Alpaca.jpg',
        fotoPost: 'https://s3.amazonaws.com/ogden_images/www.lockhaven.com/images/2019/03/05214950/Huacaya-Alpacas.jpg'
      },

      {
        nomeUsuario:'reysla',
        fotoUsuario:'https://media.gazetadopovo.com.br/vozes/2012/11/chow_chow-53764208.jpg',
        fotoPost:'https://64.media.tumblr.com/50a3959ae18cf668a08761f3f6bf4741/tumblr_pq7wjzVHio1qj69eg_540.png'
      },
    ],

    valorNomeUsuario: "",
    valorFotoUsuario: "",
    valorFotoPost: ""
  }

  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorNomeUsuario,
      fotoUsuario: this.state.valorFotoUsuario,
      fotoPost: this.state.valorFotoPost,
    }

    const novosPosts = [novoPost, ...this.state.posts];

    this.setState({posts: novosPosts})
  }

  onChangeNome = (event) => {
    this.setState({valorNomeUsuario: event.target.value})
  }

  onChangeFotoUsuario = (event) => {
    this.setState({valorFotoUsuario: event.target.value})
  }

  onChangeFotoPost = (event) => {
    this.setState({valorFotoPost: event.target.value})
  }
  
  render() {
    const listaDePosts = this.state.posts.map((post) => {
      return (
        <Post
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      );
    }); 
    return (
      <div className={'app-container'}>
        
      </div>
    );
  }
}

export default App;
