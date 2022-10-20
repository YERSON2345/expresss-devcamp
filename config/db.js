const mongoose = require('mongoose')

//Cambiar al contraseña
//const uri = 'mongodb+srv://YERSON2345:CONTRASEÁ@cluster0.s4chkz4.mongodb.net/bootcamps-sena?retryWrites=true&w=majority'

const uri ='mongodb://localhost:27017/bootcamps-sena'
//Componente de conexión a BD
//tipo : funcional

const connectDB = async() =>{
    const conn = await mongoose.connect(uri, {
        useNewUrlParser : true,
        useUnifiedTopology: true
    })
    console.log(`MongoDB Conectado: ${conn.connection.host}`)
}

connectDB()
