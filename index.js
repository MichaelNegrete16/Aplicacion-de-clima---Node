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
                if(id === '0') continue

                const lugarSel = lugares.find( l => l.id === id )
                // Guardar en db
                busqueda.agregarHistorial(lugarSel.nombre)
                
                // Datos del clima
                const clima = await busqueda.climaLugar(lugarSel.lat, lugarSel.lng)

                // Mostrar resultados
                console.clear()
                console.log('\nInformacion de la ciudad\n'.green)
                console.log('Ciudad:', lugarSel.nombre)
                console.log('Latitud:',lugarSel.lat)
                console.log('Longitud:', lugarSel.lng)
                console.log('Temperatura:', clima.temp)
                console.log('Temperatura Minima:', clima.min)
                console.log('Temperatura Maxima:',clima.max)
                console.log('Como esta el clima:',clima.desc.green)

                break;
            
            case 2:
                busqueda.historialCapitalizado.forEach((lugar,i) => {
                    const idx = `${ i+1 }.`.green
                    console.log(`${idx} ${lugar}`) 
                })
                break;
        
            default:
                break;
        }

        await pausa()

    } while (opt !== 0);

} 

main()