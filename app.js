const fs = require('fs');



console.clear()
console.log('=====================')
console.log('     Tabla del: 5    ')
console.log('=====================')

const base = 2;
let salida ='';
for(let i = 1; i <= 10; i++){
    // backslash  \n "agrega un salto de linea"
    salida += `${ base } X ${ i } = ${ base * i }\n`
}

console.log(salida);

fs.writeFile( `tabla-${base}.txt`, salida, (err)=>{
    if(err) throw err
    console.log(`Tabla-${base}.txt Creado`)
} )

//console.log(salida)