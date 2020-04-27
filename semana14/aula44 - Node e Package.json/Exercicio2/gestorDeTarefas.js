const fs = require( 'fs');

const nomeDoArquivo = process.argv[2];
const novaTarefa = process.argv[3];

try {
    fs.appendFileSync(nomeDoArquivo, '\n' + novaTarefa);
    console.log('Tarefa adicionada com sucesso!')
} catch (err) {
    console.error(err)
}

