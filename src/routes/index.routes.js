const userRoutes = require('express').Router();
// const placeRoutes = require('express').Router();

const UserRoutes = require('./user.routes');
const PlaceRoutes = require('./place.routes');
const carRoutes = require('./car.routes');

userRoutes.use('/place' , PlaceRoutes);
userRoutes.use('/users' , UserRoutes);
userRoutes.use('/cars' , carRoutes);

module.exports = userRoutes;