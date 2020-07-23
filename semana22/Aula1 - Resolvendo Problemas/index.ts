import { editString } from './src/exercicio1';
import { stringCompressor } from './src/exercicio2';

function run(): void {
    const operation = process.argv[2]

    if (operation === 'exercicio1') {
        console.log(editString(process.argv[3], process.argv[4]))
    }

    if (operation === 'exercicio2') {
        console.log(stringCompressor(process.argv[3]))
    }
}

run()