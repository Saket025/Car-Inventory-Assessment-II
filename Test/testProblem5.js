
const olderCar2000 = require('../problem5');
const inventory = require('../inventory'); // Assuming inventory is provided in a separate file

const carYears = inventory.map(car => car.car_year);


const olderCars = olderCar2000(carYears);
