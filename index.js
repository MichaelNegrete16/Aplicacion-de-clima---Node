// Helpers
const { leerInput, inquirerMenu, pausa } = require("./helpers/inquirer")

const main = async() => {

    let opt

    do {
        
        // Imprimir el menu
        opt = await inquirerMenu()

        await pausa()

    } while (opt !== 0);

} 

main()