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
