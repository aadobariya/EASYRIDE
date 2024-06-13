const PlaceServieces = require('../services/place.service');
const placeService = new PlaceServieces();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.addPlace = async(req,res)=>{
    try {
        let place = await placeService.getPlace({name: req.body.name});
    
        if(place){
            return res.status(400).json({Message: `Place all ready exist...`})
        }
        place = await placeService.addNewPlace({
            ...req.body
        });
        res.status(201).json({place, Message: 'New Place is Added...'})
    } catch (error) {
        console.log(error);
        res.status(500).json({Message: `Internal server error.. ${console.error()} `});
    }
};

exports.searchPlaces = async(req,res)=>{
    try {
        let searchQuery = req.query;
        let places = await placeService.searchPlaces(searchQuery);
        res.status(200).json(places);
    } catch (error) {
        console.log(error);
        res.status(500).json({Message: `Internal server error.. ${console.error()} `});
    }
}