interface Point {
  x: number;
  y: number;
}

interface Vehicle {
  currentLocation: Point;
  travelTo(point: Point): void;
}
// class yapisi bize bir obje uretmek icin gerekli olan yapiyi sunuyor.
class Taxi implements Vehicle {
  private color: string;
  currentLocation: Point;
  constructor(private location: Point, color: string) {
    this.currentLocation = location;
    this.color = color;
  }
  travelTo(point: Point): void {
    console.log(
      `taksi X :${this.location.x} undan Y: ${this.location.y} konumuna`
    );
  }
}

let taxi_1: Taxi = new Taxi({ x: 2, y: 5 }, "Blue");
taxi_1.travelTo({ x: 1, y: 2 });

// console.log(taxi_1.currentLocation);
// let taxi_2 = new Taxi({ x: 323, y: 1232 }, "Blue");

// console.log(taxi_2);
