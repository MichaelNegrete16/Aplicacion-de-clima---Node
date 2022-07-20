// Libreria de 3ros
const axios = require('axios')

class Busquedas {
    historial = []

    constructor(){
        // Todo: leer Db si existe
    }

    get paramsMapbox(){
        return {
            'access_token':'pk.eyJ1IjoiamFja3NvbjAxIiwiYSI6ImNsNW8zOWxsdzA4M2gzY21vZ3ZrMW53Zm8ifQ.qEkMkuZf11kQ8F5Q-ohWyg',
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