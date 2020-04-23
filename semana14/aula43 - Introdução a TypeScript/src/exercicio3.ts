// Letra A
type post = {
    author: string,
    text: string
}

const post1: post = {
    author: "Azul",
    text: "Hoje o dia está ensolarado!"
}

const post2: post = {
    author: "Verde",
    text: "O sol ja raiou na fazendinha"
}

const post3: post = {
    author: "Oceano",
    text: "Há mares que vêm para o bem."
}

const post4: post = {
    author: "Usuario",
    text: "Descobriram a vacina do coronavírus!"
}

const post5: post = {
    author: "Usuario",
    text: "Habemus vacina, podemos sair de casa!!!!"
}

const posts: post[] = [post1, post2, post3, post4, post5]


// Letra B
function findPostByAuthor(posts: post[], nameAuthor: string) {    
    return posts.filter((post: post) => {
        return post.author === nameAuthor
    })
}

console.log(`Posts do Usuario => ${findPostByAuthor(posts, 'Usuario')}`)