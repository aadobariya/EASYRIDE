const Place = require('../model/place.model');

module.exports = class placeServices{

    //Add new place

    async addNewPlace(body) {
        try {
            return await Place.create(body);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

    // Get Single place

    async getPlace(body){
      try {
          return await Place.findOne(body);
      } catch (error) {
          console.log(error);
            return error.message;
      }
    };

    // Get All Place

    async getAllPlaces(body) {
        try {
            let find = [
                { $match: { isDelete: false } },

            ];

            let result = await Place.aggregate(find);
            return result;
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

    // update palce , delete place

    async updatePlace(id, body) {
        try {
            return await User.findByIdAndUpdate(id, { $set: body }, { new: true });
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

    // search place

    async searchPlaces(searchQuery){
        try {
            const query = {};
            if (typeof searchQuery.name === 'string' && searchQuery.name.trim()){
                query.name = { $regx: searchQuery.name, $options: 'i'};
            }
            if (typeof searchQuery.city === 'string' && searchQuery.city.trim()){
                query.city = { $regx: searchQuery.city, $options: 'i'};
            }
            const places = await Place.find(query);
            return places;
        } catch (error) {
            console.log(error);
            return error.message;
        }
    }
}