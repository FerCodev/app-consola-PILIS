const argv = require('yargs')
                .options({
                    'b': {
                    alias: 'base',
                    demandOption: true,
                    type: 'number',
                    describe: 'Es la base de la tabla'
                    },
                    'l': {
                        alias: 'listar',
                        type: 'boolean',
                        default: false,
                        describe: 'Muestra la tabla en consola'
                    },
                    'h': {
                        alias: 'hasta',
                        type: 'number',
                        default: '10',
                        describe:'limite de la base'

                    }
                })
                .check((argv, options) => {
                    if( isNaN( argv.b )){
                        throw 'La base tiene que ser un numero'
                    }
                    return true;
                })
                .argv;

module.exports = argv;