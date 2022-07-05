const fatorial = require('./fatorial').fatorial

console.log('n-fatorial')

const argv = require('yargs').demandOption('num').argv

/*
console.log(`Executando script a partir do diretório ${process.cwd()}`)

process.on('exit', () => {
    console.log('script está prestes a terminar')
})
*/

const num = argv.num //parseInt(process.argv[2])

console.log(`O fatorial de ${num} é igual a ${fatorial(num)}`)