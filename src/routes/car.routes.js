const express = require('express');
const carRoutes = express.Router();

const {
    addNewCar
}=require("../controller/car.controller");

carRoutes.post('/add-car' , addNewCar);

module.exports = carRoutes;