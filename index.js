// Helpers
const { leerInput } = require("./helpers/inquirer")

const main = async() => {

    const texto = await leerInput('Hola: ')
    console.log(texto)

} 

main()