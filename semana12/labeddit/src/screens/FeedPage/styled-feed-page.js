import styled from 'styled-components'

export const PostsMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    border-radius: 5px;
    width: 100vw;
    margin-top: 10px;
    max-width: 500px;
`

export const PostTextArea = styled.div`
    text-align: center;
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
    width: 100vw;
    max-width: 500px;
`

export const PostBottomArea = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    max-width: 500px;
`

export const VoteArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`