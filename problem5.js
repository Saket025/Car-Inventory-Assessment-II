//==== Problem #5 ====
// The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.

function olderCar2000(carYears) {
    
    const olderCars = carYears.filter(year => year < 2000);
  
    
    console.log("Cars made before 2000:", olderCars);
    console.log("Number of cars made before 2000:", olderCars.length);
  
    return olderCars; 
  }
  
  module.exports = olderCar2000;
  