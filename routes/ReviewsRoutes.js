//
const express =require('express')

//definir objeto de ruteo
const router = express.Router()

//crear rutas de reviews

//listar todos los reviews
router.get('/',(req, res)=>{
    res.status(200)
    .json({
        "success": true,
        "data":"Aqui van a salir todos las reviews"
    })
})
//Crear nueva review
router.post('/',(req, res)=>{
    res.status(200)
    .json({
        "success": true,
        "data":"Aqui vamos a registrar las reviews"
    })
})

//Listar reviews por ID
router.get('/:id',(req, res)=>{
    console.log(req.params.id)
    res.status(200)
    .json({
        "success": true,
        "data":`Aqui va a salir la review cuyo id es ${req.params.id}`
    })
})

//Actualizar reviews
router.put('/:id',(req, res)=>{
    console.log(req.params.id)
    res.status(200)
    .json({
        "success": true,
        "data":`Aqui se va a modificar la review cuyo id es ${req.params.id}`
    })
})
//Eliminar reviews
router.delete('/:id',(req, res)=>{
    console.log(req.params.id)
    res.status(200)
    .json({
        "success": true,
        "data":`Aqui se va a eliminar la review cuyo id es ${req.params.id}`
    })
})

module.exports = router