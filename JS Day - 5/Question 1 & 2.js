// 1. class Movie with three properties which represents title , studio , rating -------------------------------

class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  
    static getPG(movies) {
      return movies.filter(movie => movie.rating === "PG");
    }
  }
  
  // Example for creating an instance of Movie
  const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
  
  // Example for using the getPG method
  const moviesArray = [
    new Movie("Movie1", "Studio1", "PG"),
    new Movie("Movie2", "Studio2", "PG-13"),
    new Movie("Movie3", "Studio3", "R"),
    // Add more Movie instances as needed
  ];
  
  const pgMoviesArray = Movie.getPG(moviesArray);
  console.log(pgMoviesArray);




  // 2. Convert the UML diagram to JavaScript class. - use number for double ----------------------------------------------
  class Circle {
    constructor(radius = 1.0, color = "red") {
        this._radius = radius;
        this._color = color;
    }

    getRadius() {
        return this._radius;
    }

    setRadius(radius) {
        this._radius = radius;
    }

    getColor() {
        return this._color;
    }

    setColor(color) {
        this._color = color;
    }

    toString() {
        return `Circle[radius=${this._radius}, color=${this._color}]`;
    }

    getArea() {
        return Math.PI * this._radius * this._radius;
    }

    getCircumference() {
        return 2 * Math.PI * this._radius;
    }
}

// Example usage:
const circle1 = new Circle();
console.log(circle1.toString()); // Output: Circle[radius=1, color=red]
console.log("Area:", circle1.getArea()); // Output: Area: 3.141592653589793
console.log("Circumference:", circle1.getCircumference()); // Output: Circumference: 6.283185307179586

const circle2 = new Circle(2.5, "blue");
console.log(circle2.toString()); // Output: Circle[radius=2.5, color=blue]