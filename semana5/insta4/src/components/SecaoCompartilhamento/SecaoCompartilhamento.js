import React from 'react'
import './SecaoCompartilhamento.css'

export function SecaoCompartilhamento(props) {

		return <div className={'share-container'}>
			<img src={props.iconeFacebook} alt="Ícone do Facebook" onClick={props.aoCompartilhar} />
            <img src={props.iconeWhatsApp} alt="Ícone do Whatsapp" onClick={props.aoCompartilhar} />
            <img src={props.iconeTwitter} alt="Ícone do Twitter" onClick={props.aoCompartilhar} />
		</div>	
}