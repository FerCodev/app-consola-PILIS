
const {crearArchivo} = require('./helpers/multiplicar')

const argv = require('yargs').argv

console.clear()
//con estas dos lineas accedemos a los procesos de 
//consola y su posicion (hay que optimizar)
// const [,,arg3= 'base=5'] = process.argv
// const [ ,base = 5 ] = arg3.split('=')


console.log( process.argv )
console.log( argv )

console.log( 'base yargs:', argv.base)




// const base = 5;

// crearArchivo( base )
//     .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
//     .catch( err => console.log(err));
