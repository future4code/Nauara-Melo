import { readFile, readdir } from 'fs'

const handleFileRead = (err: Error, data: Buffer) => {
    try {
        console.log(data.toString())
    } catch (e) {
        console.log(err)
    }
}

readdir('./textos', (err, files) => {
    files.forEach((file) => {
        readFile(`./textos/${file}`, handleFileRead);
    })
})