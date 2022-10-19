//Crear el objeto express

const express = require('express')

//2-Citar las dependencias necesarias para el proyecto

//(para leer los archivos de configuración .env)
const dotenv = require('dotenv')
const colors = require('colors')
const listEndpoint =require('express-list-endpoints')
//los componentes de rutas
const bootcampRoutes = require('./routes/BootcampRoutes')
const coursesRoutes = require('./routes/CoursesRoutes')

//3.  Establecer configuración
dotenv.config({
    path:'./config/config.env'
})

console.log(process.env.PORT)



//Crear el objeto aplicaion(contiene el servidor de desarrollo que necesitamos(crear rutas, etc) lo princiipal es que tienen el servidor de desarrollo)
//Servidor de desarrollo
const app = express()

//rutas de proyecto
app.use('/api/v1/bootcamps', bootcampRoutes)
app.use('/api/v1/courses', coursesRoutes)

//endpoint 
app.get('/', (request, response) =>{
    response.status(200)
    .json({
        "success":true,
        "data":"request exitosa"
    })

    send('JAJAJAJA SALU2')
})

//endpoints de dominio
//bootcamp





//Imprimir la lista de endpoint
//validas del proyecto
console.log(listEndpoint(app))


//ejecutar el servidor desarrollo
// parametros: 
// puerto de escucha
app.listen(process.env.PORT, ()=>{
    console.log(`Servidor activo en puerto 5000`.bgWhite.random)
})