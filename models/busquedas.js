// Librerias de node
const fs = require('fs')
// Libreria de 3ros
const axios = require('axios')

class Busquedas {
    historial = []
    dbPath = './db/database.json'

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

    agregarHistorial(lugar = ''){
        // Evitar duplicados
        // Si ya existe el valor hara un return y no lo guardara de nuevo
        if(this.historial.includes( lugar.toLocaleLowerCase() )){
            return
        }
        // si no existe lo guarda
        this.historial.unshift( lugar.toLocaleLowerCase() )

        // Grabar en DB
        this.guardarDB()
    }

    guardarDB(){
        const payload = {
            historial: this.historial
        }
        fs.writeFileSync(this.dbPath, JSON.stringify(payload))

    }

    leerDB(){

    }

}

module.exports = Busquedas