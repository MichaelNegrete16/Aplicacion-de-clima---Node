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

    get paramsOpenWeather(){
        return{
            'appid': process.env.OPENWEATHER_KEY,
            'units': 'metric',
            'lang': 'es'
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
            return resp.data.features.map( lugar => ({
                id: lugar.id,
                nombre: lugar.place_name,
                lng: lugar.center[0],
                lat: lugar.center[1]
            }))


        } catch (error) {
            return []
        }
        
    }

    async climaLugar(lat, lon) {

        try {
            
            // Instancia de axios.create
            const instace = axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}`,
                params: this.paramsOpenWeather
            })
            // Respuesta.data
            const {data} = await instace.get()

            return{
                desc: data.weather[0].description,
                min: data.main.temp_min,
                max: data.main.temp_max,
                temp: data.main.temp,
            }

        } catch (error) {
            console.log(error)
        }

    }

}

module.exports = Busquedas