const carModel = require('../model/car.model');
const Car = require('../model/car.model');

module.exports = class CarServieces {
     
    //Add new Car

    // async addNewCar(body){
    //     return await carModel.create(body);
    // };


     async addNewCar(body) {
        try {
            return await Car.create(body);
         } catch (error) {
            console.log(error);
            return error.message;
        }
     }; 

    // get cars

    async getCar(body){
        try {
            return await Car.findOne(body);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

};