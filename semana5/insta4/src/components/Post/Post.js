import React from 'react'
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeSalvoBranco from '../../img/bookmark-border-black-icon.svg'
import iconeSalvoPreto from '../../img/bookmark-black-icon.svg'
import iconeCompartilhar from '../../img/share-icon.svg'
import iconeFacebook from '../../img/facebook-icon.png'
import iconeWhatsApp from '../../img/whatsapp-icon.png'
import iconeTwitter from '../../img/twitter-icon.svg'

import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import {SecaoCompartilhamento} from '../SecaoCompartilhamento/SecaoCompartilhamento'

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    salvo: false,
    compartilhando: false
  }

  onClickCurtida = () => {
    if (!this.state.curtido) {
      this.setState({
        curtido: this.state.curtido === false,
        numeroCurtidas: this.state.numeroCurtidas + 1
      })
    } else {
      this.setState({
        curtido: false,
        numeroCurtidas: this.state.numeroCurtidas - 1
      })
    }
  }

  onClickSalvo = () => {
    this.setState({salvo: !this.state.salvo})
  }

  onClickComentario = () => {
    this.setState({comentando: !this.state.comentando})
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  onClickCompartilhar = () => {
    this.setState({compartilhou: !this.state.compartilhou})
  }

  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    let iconeSalvo

    if (this.state.salvo) {
      iconeSalvo = iconeSalvoPreto
    } else {
      iconeSalvo = iconeSalvoBranco
    }

    let componenteCompartilhamento

    if(this.state.compartilhando) {
      componenteCompartilhamento = <SecaoCompartilhamento 
                                      iconeFacebook={iconeFacebook}
                                      iconeWhatsApp={iconeWhatsApp}
                                      iconeTwitter={iconeTwitter}
                                      aoCompartilhar={this.onClickCompartilhar}
                                    />
    }

    return <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeSalvo}
          onClickIcone={this.onClickSalvo}
        />

        <IconeComContador
          icone={iconeCompartilhar}
          onClickIcone={this.onClickCompartilhar}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </div>
      {componenteComentario}
    </div>
  }
}

export default Post