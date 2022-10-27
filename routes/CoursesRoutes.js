//
const express =require('express')

//definir objeto de ruteo
const router = express.Router()

//crear rutas de Courses

//listar todos los Courses
router.get('/',(req, res)=>{
    res.status(200)
    .json({
        "success": true,
        "data":"Aqui van a salir todos los cursos"
    })
})
//Crear nuevo Courses
router.post('/',(req, res)=>{
    res.status(200)
    .json({
        "success": true,
        "data":"Aqui vamos a registrar los cursos"
    })
})

//Listar Courses por ID
router.get('/:id',(req, res)=>{
    console.log(req.params.id)
    res.status(200)
    .json({
        "success": true,
        "data":`Aqui va a salir el curso cuyo id es ${req.params.id}`
    })
})

//Actualizar Courses
router.put('/:id',(req, res)=>{
    console.log(req.params.id)
    res.status(200)
    .json({
        "success": true,
        "data":`Aqui se va a modificar el curso cuyo id es ${req.params.id}`
    })
})
//Eliminar Courses
router.delete('/:id',(req, res)=>{
    console.log(req.params.id)
    res.status(200)
    .json({
        "success": true,
        "data":`Aqui se va a eliminar el curso cuyo id es ${req.params.id}`
    })
})

module.exports = router