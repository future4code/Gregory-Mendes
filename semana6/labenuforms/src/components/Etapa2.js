import React from 'react';
import styled from 'styled-components'

const SecondStepContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
`

const Button = styled.button`
    margin-top: 15px;
`

class Etapa2 extends React.Component {
    render() {
        return (
            <SecondStepContainer>
                <h2>2ª Etapa - Informações de Ensino Superior</h2>
                <p>5. Qual o curso?</p>
                <input/>
                <p>6. Qual a unidade de ensino?</p>
                <input/>
            </SecondStepContainer>
        );
    }    
}

export default Etapa2;