
const {crearArchivo} = require('./helpers/multiplicar')

const argv = require('yargs')
                .options({
                    'b': {
                    alias: 'base',
                    demandOption: true,
                    type: 'number'
                    },
                    'l': {
                        alias: 'listar',
                        type: 'boolean',
                        demandOption: true,
                        default: false
                    }
                })
                .check((argv, options) => {
                    if( isNaN( argv.b )){
                        throw 'La base tiene que ser un numero'
                    }
                    return true;
                })
                .argv

console.clear()

//console.log( 'base yargs:', argv.base)
// default: '/etc/passwd',
// describe: 'x marks the spot',



// const base = 5;

crearArchivo( argv.b, argv.l )
    .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch( err => console.log(err));
