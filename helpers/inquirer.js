const inquirer = require('inquirer')
require('colors')

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desea hacer?',
        choices: [
            {
                value: 1,
                name: `${'1.'.green} Buscar ciudad`
            },
            {
                value: 2,
                name: `${'2.'.green} Historial`
            },
            {
                value: 0,
                name: `${'0.'.green} Salir`
            },
        ]
    }
]


const inquirerMenu = async() => {

    console.clear()
    console.log('====================='.rainbow)
    console.log('Seleccione una opcion')
    console.log('=====================\n'.rainbow) 

    const {opcion} = await inquirer.prompt(preguntas)
    return opcion
}

const pausa = async () => {

    const preguntaSalir = [
        {
            type: 'input',
            name: 'opcion',
            message: `Presione ${'ENTER'.green} para continuar\n`
        }
    ]
    console.log('')
    await inquirer.prompt(preguntaSalir)

}

const leerInput = async(message) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value){
                if(value.length === 0){
                    return 'Por favor ingrese un valor'
                }
                return true
            }
        }
    ]

    const {desc} = await inquirer.prompt(question)
    return desc

}

const listarLugares = async (lugares = []) => {

    const choices = lugares.map( (lugar,idx) => {
        
        const i = (`${idx + 1}.`.green)

        return {
            value: lugar.id,
            name: `${i} ${lugar.nombre}`
        }
    })

    // Agregar un nueva opcion
    choices.unshift({
        value:'0',
        name: '0.'.green + ' Cancelar'
    })

    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Seleccione lugar: ',
            choices
        }
    ]

    // Retornar el id del que se va a borrar
    const {id} = await inquirer.prompt(preguntas)

    return id

}

const confirmar = async (message) => {
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ]

    // llamar una confirmacion al usuario
    const {ok} = await inquirer.prompt(question)
    return ok

}

const mostrarListadoChecklist = async (tareas = []) => {

    const choices = tareas.map( (tarea,idx) => {
        
        const i = (`${idx + 1}.`.green)

        return {
            value: tarea.id,
            name: `${i} ${tarea.desc}`,
            checked: (tarea.completadoEn) ? true : false
        }
    })

    const pregunta = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Selecciones',
            choices
        }
    ]

    // Retornar el id del que se va a borrar
    const {ids} = await inquirer.prompt(pregunta)

    return ids

}




module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listarLugares,
    confirmar,mostrarListadoChecklist
}