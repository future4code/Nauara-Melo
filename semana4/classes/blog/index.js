class Post {
    constructor (titulo, autor, conteudo, data) {
        this.titulo = titulo
        this.autor = autor
        this.conteudo = conteudo
        this.data = data
    }
}

function criarPost() {
    let valorDoInput = document.getElementById("titulo").value
    let valorDoInput = document.getElementById("autor").value
    let valorDoInput = document.getElementById("conteudo").value
    let valorDoInput = document.getElementById("data").value
    const post = new Post()
}

// let novoPost = new Post