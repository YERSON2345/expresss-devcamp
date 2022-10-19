//
const express =require('express')

//definir objeto de ruteo
const router = express.Router()

//crear rutas de bootcamps

//listar todos los bootcamps
router.get('/',(req, res)=>{
    res.status(200)
    .json({
        "success": true,
        "data":"Aqui van a salir todos las reviews"
    })
})
//Crear nuevo bootcamp
router.post('/',(req, res)=>{
    res.status(200)
    .json({
        "success": true,
        "data":"Aqui vamos a registrar las reviews"
    })
})

//Listar bootcamp por ID
router.get('/:id',(req, res)=>{
    console.log(req.params.id)
    res.status(200)
    .json({
        "success": true,
        "data":`Aqui va a salir la review cuyo id es ${req.params.id}`
    })
})

//Actualizar bootcamp
router.put('/:id',(req, res)=>{
    console.log(req.params.id)
    res.status(200)
    .json({
        "success": true,
        "data":`Aqui se va a modificar la review cuyo id es ${req.params.id}`
    })
})
//Eliminar bootcamp
router.delete('/:id',(req, res)=>{
    console.log(req.params.id)
    res.status(200)
    .json({
        "success": true,
        "data":`Aqui se va a eliminar la review cuyo id es ${req.params.id}`
    })
})

module.exports = router