// Using `extends` for inheritance
class Shape {
    constructor(color = 'red') {
        this.color = color;
    }
}

class Circle extends Shape {
    constructor(radius, color) {
        super(color); // Call the parent constructor
        this.radius = radius;
    }

    // Generator function to calculate the areas of circles with increasing radii
    *generateAreas() {
        let r = this.radius;
        while (r <= this.radius + 5) {
            yield Math.PI * r * r;
            r++;
        }
    }
}

const circle = new Circle(5, 'blue');

// Using an iterator (generator) to get areas
const areas = [...circle.generateAreas()];
console.log(areas); // Output: [78.54, 113.10, 153.94, 201.06, 254.47, 314.16]

console.log(`Color: ${circle.color}`); // Output: Color: blue
