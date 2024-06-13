
const express = require('express');
const PlaceRoutes = express.Router();


const {
   addPlace,
   getAllPlace,
   getPlace,
   deletePlace,
   searchPlaces
} = require('../controller/place.controller');

PlaceRoutes.post('/add-place' ,addPlace);
// PlaceRoutes.get('/get-all-place' , getAllPlace);
// PlaceRoutes.get('/get-place' , getPlace);
// PlaceRoutes.delete('/delete-place' , deletePlace);
PlaceRoutes.get('/search-place' ,searchPlaces);



module.exports = PlaceRoutes;