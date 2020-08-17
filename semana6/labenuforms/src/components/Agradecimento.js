import React from 'react';
import styled from 'styled-components'

const FinalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
`

class Agradecimento extends React.Component {
    render() {
        return (
            <FinalContainer>
                <h2>Você finalizou o formulário</h2>
                <p>Agradecemos a sua participação! Entraremos em contato.</p>
            </FinalContainer>
        );
    }    
}

export default Agradecimento;