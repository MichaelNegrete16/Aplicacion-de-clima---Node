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
            const respuesta = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/carta.json?country=co&language=es&access_token=pk.eyJ1IjoiamFja3NvbjAxIiwiYSI6ImNsNW8zOWxsdzA4M2gzY21vZ3ZrMW53Zm8ifQ.qEkMkuZf11kQ8F5Q-ohWyg')
            console.log(respuesta.data)

            return []

        } catch (error) {
            return []
        }
        

        return [] //Retorna los lugares que coincidan con el lugar que escribe la persona
    }

}

module.exports = Busquedas