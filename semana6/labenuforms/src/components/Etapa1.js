import React from 'react';
import styled from 'styled-components'

const FirstStepContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
`

const Button = styled.button`
    margin-top: 15px;
`

class Etapa1 extends React.Component {
    render() {
        return (
            <FirstStepContainer>
                <h2>1ª Etapa - Dados Gerais</h2>
                <p>1. Qual o seu nome?</p>
                <input/>
                <p>2. Qual a sua idade?</p>
                <input/>
                <p>3. Qual o seu e-mail?</p>
                <input/>
                <p>4. Qual a sua escolaridade?</p>
                <select>
                    <option>Ensino Médio Incompleto</option>
                    <option>Ensino Médio Completo</option>
                    <option>Ensino Superior Incompleto</option>
                    <option>Ensino Superior Completo</option>
                </select>
            </FirstStepContainer>
        );
    }    
}

export default Etapa1;