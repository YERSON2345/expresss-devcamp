//Crear el objeto express

const express = require('express')

//2-Citar las dependencias necesarias para el proyecto

//(para leer los archivos de configuración .env)
const dotenv = require('dotenv')
const colors = require('colors')
const connectDB = require('./config/db')
const listEndpoint =require('express-list-endpoints')
//los componentes de rutas
const bootcampRoutes = require('./routes/BootcampRoutes')
const coursesRoutes = require('./routes/CoursesRoutes')
const reviewsRoutes = require('./routes/ReviewsRoutes')
const usersRoutes = require('./routes/UserRoutes')

//3.  Establecer configuración
dotenv.config({
    path:'./config/config.env'
})

console.log(process.env.PORT)



//Crear el objeto aplicaion(contiene el servidor de desarrollo que necesitamos(crear rutas, etc) lo princiipal es que tienen el servidor de desarrollo)
//Servidor de desarrollo
const app = express()
//validar el objeto aplicacion para obtener datos en objeto .JSON
app.use(express.json())

//conexión a bd
connectDB()

//rutas de proyecto
app.use('/api/v1/bootcamps', bootcampRoutes)
app.use('/api/v1/courses', coursesRoutes)
app.use('/api/v1/reviews', reviewsRoutes)
app.use('/api/v1/users', usersRoutes)

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