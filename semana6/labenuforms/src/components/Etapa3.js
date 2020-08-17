import React from 'react';
import styled from 'styled-components'

const ThirdStepContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
`

const Button = styled.button`
    margin-top: 15px;
`

class Etapa3 extends React.Component {
    render() {
        return (
            <ThirdStepContainer>
                <h2>3ª Etapa - Dados Gerais</h2>
                <p>7. Por que não completou o curso de graduação?</p>
                <input/>
                <p>8. Fez algum curso complementar?</p>
                <select>
                    <option>Nenhum</option>
                    <option>Curso técnico</option>
                    <option>Curso de inglês</option>
                </select>
            </ThirdStepContainer>
        );
    }    
}

export default Etapa3;