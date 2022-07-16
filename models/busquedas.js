// Libreria de 3ros
const axios = require('axios')

class Busquedas {
    historial = []

    constructor(){
        // Todo: leer Db si existe
    }

    // Buscar una ciudad
    async ciudad( lugar =''){
       
        try {
             // Peticion http
            // console.log('Ciudad: ',lugar)
            const respuesta = await axios.get('https://reqres.in/api/users?page=2')
            console.log(respuesta.data)

            return []

        } catch (error) {
            return []
        }
        

        return [] //Retorna los lugares que coincidan con el lugar que escribe la persona
    }

}

module.exports = Busquedas