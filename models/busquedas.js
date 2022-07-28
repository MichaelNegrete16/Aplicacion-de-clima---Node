// Libreria de 3ros
const axios = require('axios')

class Busquedas {
    historial = []

    constructor(){
        // Todo: leer Db si existe
    }

    get paramsMapbox(){
        return {
            'access_token': process.env.MAPBOX_KEY,
            'limit': 5,
            'languaje': 'es'
        }
    }

    // Buscar una ciudad
    async ciudad( lugar =''){
       
        try {
             // Peticion http
            const intance = axios.create({
                baseURL:`https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params: this.paramsMapbox
            })
            // Hacer peticion
            const resp = await intance.get()
            console.log(resp.data)

            return []

        } catch (error) {
            return []
        }
        

        return [] //Retorna los lugares que coincidan con el lugar que escribe la persona
    }

}

module.exports = Busquedas