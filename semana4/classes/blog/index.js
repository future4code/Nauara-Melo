const posts = []

class Post {
    constructor (titulo, autor, conteudo, data) {
        this.titulo = titulo
        this.autor = autor
        this.conteudo = conteudo
        this.data = data
    }
}

function criarPost() {
    const tituloInput = document.getElementById("titulo")
    const autorInput = document.getElementById("autor")
    const conteudoInput = document.getElementById("conteudo")
    const dataInput = document.getElementById("data")

    const post = new Post(titulo.value, autor.value, conteudo.value, data.value)

    posts.push(post)
    limparCampos(tituloInput, autorInput, conteudoInput, dataInput)
    
    console.log(posts)
}

function limparCampos(tituloInput, autorInput, conteudoInput, dataInput) {
    tituloInput.value = ''
    autorInput.value = ''
    conteudoInput.value = ''
    dataInput.value = ''
}

function exibirPosts() {
    const divMostrarPosts = document.getElementById("posts")
    const listaDePosts = divMostrarPosts.querySelector('ul') 

    for (let post of posts) {
        listaDePosts.innerHTML += '<li>' + 'Titulo: ' + post.titulo + ' | Autor: ' + post.autor + ' | Conteudo: ' + post.conteudo + ' | Data: ' + post.data + '</li>'
    } 

}