
const express =require('express')
const { 
    getAllReviews,
    getSingleReviews,
    updateReviews,
    deleteReviews,
    createReviews
} = require('../controllers/ReviewsController')

//definir objeto de ruteo
const router = express.Router()

//crear rutas sin parametros
router.route('/')
            .get(getAllReviews)
            .post(createReviews)
//Crear rutas con parametros
router.route('/:id')
            .get(getSingleReviews)
            .put(updateReviews)
            .delete(deleteReviews)

module.exports = router