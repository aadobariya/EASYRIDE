const CarServieces = require('../services/car.service');
const carService = new CarServieces();

exports.addNewCar = async(req , res) => {
    try {
        let car = await carService.getCar({Name: req.body.Name});
        console.log(car);
        if(car){
            return res.status(400).json({Message: `Car is Alredy Exist...`})
        }
        car = await carService.addNewCar({
            ...req.body  
        });
        res.status(201).json({car, Message: 'New Car is Added...'})
    } catch (error) {
        console.log(error);
        res.status(500).json({Message: `Internal server error.. ${console.error()} `});
    }
};