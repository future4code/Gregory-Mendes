import styled from 'styled-components'

export const AppBarContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: lightgray;
    height: 50px;
`

export const SpanButton = styled.span`
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`