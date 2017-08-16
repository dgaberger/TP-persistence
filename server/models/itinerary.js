var Sequelize = require('sequelize');
var db = require('./_db');
var Hotel = require('./hotel');
var Restaurant = require('./restaurant');
var Activity = require('./activity');
// var Place = require('./place')

var Itinerary = db.define('itinerary', {
});

Itinerary.belongsToMany(Hotel, {through: 'itinerary_hotel'});
Itinerary.belongsToMany(Restaurant, {through: 'itinerary_restaurant'});
Itinerary.belongsToMany(Activity, {through: 'itinerary_activity'});
// Itinerary.belongsToMany(Place, {through: 'itinerary_place'});

// let testHotel;
//   Hotel.findOne({where: {id: 12}}).then((result)=>{
//     testHotel = result;
//   }).catch();
//   Itinerary.findOne({where:{id: 1}}).then((result) =>{
//     result.addHotel(testHotel, {through: {status: 'active'}})
//     console.log(testHotel)
//   }).catch()


module.exports = Itinerary;
