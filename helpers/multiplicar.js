
const fs = require('fs');

// const crearArchivo = (base = 5) => {
    
//     return new Promise( (resolve, reject) =>{
    
//         console.log('=====================')
//         console.log('   Tabla del:', base)
//         console.log('=====================')

//         let salida ='';

//         for(let i = 1; i <= 10; i++){
//             // backslash  \n "agrega un salto de linea"
//             salida += `${ base } X ${ i } = ${ base * i }\n`
//         }

//         console.log(salida);

//         fs.writeFileSync( `tabla-${base}.txt`, salida)

//         resolve(`Tabla-${base}.txt`)
//     })
// }

const crearArchivo = async(base = 5, listar = false) => {

    try {
        
        let salida ='';
    
        for(let i = 1; i <= 10; i++){
            // backslash  \n "agrega un salto de linea"
            salida += `${ base } X ${ i } = ${ base * i }\n`
        }
        if( listar ){
            console.log('=====================')
            console.log('   Tabla del:', base)
            console.log('=====================')
            console.log(salida);
        }

        fs.writeFileSync( `tabla-${base}.txt`, salida)
    
        return `Tabla-${base}.txt`

    } catch (err) {
        throw err;
    }
}

module.exports = { crearArchivo }