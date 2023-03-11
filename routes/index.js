const express = require("express");
const router = express.Router();

const carsController = require("../controllers/carsController");

module.exports = function () {
  router.get("/cars", carsController.getCars);

  router.get("/car/:idCar", carsController.getCarById);

  router.post("/car", carsController.addCar);

  return router;
};
