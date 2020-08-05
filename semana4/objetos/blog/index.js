const tituloDoPost = document.getElementById("titulo-post");
const autorDoPost = document.getElementById("autor-post");
const conteudoDoPost = document.getElementById("conteudo-post");

const post = {
    titulo: tituloDoPost,
    autor: autorDoPost,
    conteudo: conteudoDoPost
}

let infosDoPost = [post.titulo, post.autor, post.conteudo]

console.log(infosDoPost)

function aplicarPost() {
    const containerDePosts = document.getElementById("container-de-posts");
    containerDePosts.innerHTML += `<div><h1>${infosDoPost[0].value}</h1>
                        <p>${infosDoPost[1].value}</p>
                        <p>${infosDoPost[2].value}</p></div>`;
    
    infosDoPost[0].value = "";
    infosDoPost[1].value = "";
    infosDoPost[2].value = "";
}




