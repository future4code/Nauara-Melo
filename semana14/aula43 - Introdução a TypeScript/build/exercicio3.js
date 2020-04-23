const post1 = {
    author: "Azul",
    text: "Hoje o dia está ensolarado!"
};
const post2 = {
    author: "Verde",
    text: "O sol ja raiou na fazendinha"
};
const post3 = {
    author: "Oceano",
    text: "Há mares que vêm para o bem."
};
const post4 = {
    author: "Usuario",
    text: "Descobriram a vacina do coronavírus!"
};
const post5 = {
    author: "Usuario",
    text: "Habemus vacina, podemos sair de casa!!!!"
};
const posts = [post1, post2, post3, post4, post5];
function findPostByAuthor(posts, nameAuthor) {
    return posts.filter((post) => {
        return post.author === nameAuthor;
    });
}
console.log(`Posts do Usuario => ${findPostByAuthor(posts, 'Usuario')}`);
//# sourceMappingURL=exercicio3.js.map