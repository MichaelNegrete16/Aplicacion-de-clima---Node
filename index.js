// Helpers
const { leerInput, inquirerMenu, pausa } = require("./helpers/inquirer");
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
                const lugar = await leerInput('Ciudad: ')
                console.log(lugar)
                // Buscar la ciudad o lugar

                // Seleccionar el lugar

                // Datos del clima

                // Mostrar resultados
                console.log('\nInformacion de la ciudad\n'.green)
                console.log('Ciudad:',)
                console.log('Latitud:',)
                console.log('Longitud:',)
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