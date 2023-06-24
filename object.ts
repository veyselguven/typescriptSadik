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
  //.. Bus a ait ozellikleride burda ekleyebiliriz
  currentLocation: Point;
  travelTo(point: Point): void {
    console.log(`taksi X :${point.x} undan Y: ${point.y} konumuna`);
  }
}

class Bus implements Vehicle {
  //.. Bus a ait ozellikleride burda ekleyebiliriz
  currentLocation: Point;
  travelTo(point: Point): void {
    console.log(`Bus X :${point.x} undan Y: ${point.y} konumuna`);
  }
}

let taxi_1: Taxi = new Taxi();
taxi_1.currentLocation = { x: 2, y: 5 };
taxi_1.travelTo({ x: 1, y: 2 });

console.log(taxi_1.currentLocation.x);
console.log(taxi_1.currentLocation.y);

let taxi_2 = new Taxi();
taxi_2.travelTo({ x: 5, y: 6 });
taxi_2.currentLocation = { x: 44, y: 5213 };

console.log(taxi_2.currentLocation.x);
console.log(taxi_2.currentLocation.y);
