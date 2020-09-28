export const goToLoginPage = (history) => {
    history.push("/login")
}

export const goToSignUpPage = (history) => {
    history.push("/cadastro")
}

export const goToFeedPage = (history) => {
    history.push("/feed-de-posts")
}

export const goToPostPage = (history, id) => {
    history.push(`/post/${id}`)
}