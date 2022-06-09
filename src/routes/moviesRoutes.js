const express = require("express");
const router = express.Router();

const controller = require("../controllers/moviesControllers");

// console.log("INFORMAÇÕES TRAZIDAS NO CONTROLLER", controller);

// Router.verboHTTP(ROTA, CONTROLLER)
router.get('/', controller.home)
router.get('/all', controller.getAll)
router.get('/ghibli', controller.getAllGhibliMovies)

// router.post()
// router.delete()
// router.patch()
// router.put()

module.exports = router;
