//Question 3. write a "person" class to hold all the details ? ----------------------------------

class Person {
    constructor(name, age, gender, designation,city,country,number) {
        this.name = name;
        this.age = age;
        this.designation = designation;
        this.gender = gender;
        this.city = city ;
        this.country = country ;
        this.number = number ;
    }

// method to display person details:
    displayDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Designation: ${this.designation}`);
        console.log(`Gender: ${this.gender}`);
        console.log(`City: ${this.city}`);
        console.log(`Country: ${this.country}`);
        console.log(`Number: ${this.number}`);
    }
}

const person1 = new Person("Gokul", 23, "Male", "UI UX Designer" , "Chennai" , "India" , 9585);
person1.displayDetails();

const person2 = new Person("Vignesh", 23, "Male", "Doctor" , "Kanchipuram" , "France" , 9994 );
person2.displayDetails();



// 4. Class to Calculate the Uber Price ? ---------------------------------------------------------------------

class UberPriceCalculator {
    constructor() {
        // set any additional properties here
    }

// Method to calculate the price based on distance
    calculatePrice() {
        const distanceInKilometers = this.calculateDistance();
        const ratePerKilometer = 18; // Rate per kilometer in dollars
// Calculate total fare
        const totalFare = ratePerKilometer * distanceInKilometers;
        return totalFare.toFixed(2); // Return the fare rounded to 2 decimal places
    }

// Method to calculate distance (you can use a library like haversine for accurate distance)
    calculateDistance() {
        return 10; // travelling Kilometer 
    }
}

const calculator = new UberPriceCalculator();

const estimatedPrice = calculator.calculatePrice();
console.log(`Estimated Uber price: Rs ${estimatedPrice}`);