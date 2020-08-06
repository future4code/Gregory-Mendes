const tituloDoPost = document.getElementById("titulo-post");
const autorDoPost = document.getElementById("autor-post");
const conteudoDoPost = document.getElementById("conteudo-post");
const imagemDoPost = document.getElementById("imagem-post");

const post = {
    titulo: tituloDoPost,
    autor: autorDoPost,
    conteudo: conteudoDoPost,
    imagem: imagemDoPost
}

let infosDoPost = [post.titulo, post.autor, post.conteudo, post.imagem]

function aplicarPost() {
    const containerDePosts = document.getElementById("container-de-posts");
    containerDePosts.innerHTML += `<h1>${infosDoPost[0].value}</h1>
                                    <p>${infosDoPost[1].value}</p>
                                    <p>${infosDoPost[2].value}</p>`;
    
    if (infosDoPost[3].value.includes(".png") || infosDoPost[3].value.includes(".jpeg")) {
        containerDePosts.innerHTML += `<img src=${infosDoPost[3].value}>`;
    } else {
        alert("Link da imagem inválido.");
    }

    infosDoPost[0].value = "";
    infosDoPost[1].value = "";
    infosDoPost[2].value = "";
    infosDoPost[3].value = "";
}




