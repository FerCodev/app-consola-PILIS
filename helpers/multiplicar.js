
const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar = false, hasta = 10) => {

    try {
        
        let salida ='';
        let consola = '';

        for(let i = 1; i <= hasta; i++){
            // backslash  \n "agrega un salto de linea"
            salida += `${ base } X ${ i } = ${ base * i }\n`
            consola += `${ colors.brightCyan(base) } ${colors.brightRed('X')} ${ colors.brightCyan(i) } = ${ colors.brightRed(base * i) }\n`
        }
        if( listar ){
            console.log('====================='.brightGreen)
            console.log('   Tabla del:'.brightRed, base)
            console.log('====================='.brightGreen)
            console.log(consola);
        }

        fs.writeFileSync( `tabla-${base}.txt`, salida)
    
        return ('tabla-del--'.cyan+ colors.brightRed( base )+ '.txt'.cyan)

    } catch (err) {
        throw err;
    }
}
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

module.exports = { crearArchivo }