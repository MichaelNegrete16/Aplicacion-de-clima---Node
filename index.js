// Importaciones
// Dependencia para poder leer las variables de entorno de archivos .env
require('dotenv').config()
// Helpers
const { leerInput, inquirerMenu, pausa, listarLugares } = require("./helpers/inquirer");
// Models
const Busquedas = require("./models/busquedas");

const main = async() => {

    const busqueda = new Busquedas()
    let opt

    do {
        
        // Imprimir el menu
        opt = await inquirerMenu()

        switch (opt) {
            case 1:
                // Mostrar mensaje
                const termino = await leerInput('Ciudad: ')

                // Buscar la ciudad o lugar
                const lugares = await busqueda.ciudad(termino)

                // Seleccionar el lugar
                const id = await listarLugares(lugares)
                const lugarSel = lugares.find( l => l.id === id )
                // Datos del clima

                // Mostrar resultados
                console.log('\nInformacion de la ciudad\n'.green)
                console.log('Ciudad:', lugarSel.nombre)
                console.log('Latitud:',lugarSel.lat)
                console.log('Longitud:', lugarSel.lng)
                console.log('Temperatura:',)
                console.log('Temperatura Minima:',)
                console.log('Temperatura Maxima:',)

                break;
        
            default:
                break;
        }

        await pausa()

    } while (opt !== 0);

} 

main()