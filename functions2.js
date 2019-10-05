// Splice
// Parking Garage
// Function to park the car
// Parking garage as a specified amount of parking spots. Check if parkedCars length is less than garage

// Create empty array for cars
const garage = 9
const parkCars = []

// Create a fixed amount of spaces in the garage


function parkMyCar(car) {
    if (parkCars.length < garage){
        parkCars.push(car)
            console.log(car + " is parked")
    }
        else{
        console.log ("There are no more spaces availalbe")
        }
        return true;
    }

        parkMyCar("Danfo")

