interface Point {
  x: number;
  y: number;
}

interface Vehicle {
  travelTo(point: Point): void;
}
class Taxi implements Vehicle {
  constructor(private _location: Point, _color?: string) {}
  travelTo(point: Point): void {
    console.log(
      `taksi X :${this._location.x} undan Y: ${this._location.y} konumuna`
    );
  }

  get location() {
    return this._location;
  }
  set location(value: Point) {
    if (value.x < 0 || value.y < 0) {
      throw new Error("Kordinat bilgileri negatif olamaz");
    }
    this._location = value;
  }
}

let taxi_1: Taxi = new Taxi({ x: 2, y: 5 }, "Blue");
taxi_1.travelTo({ x: 1, y: 2 });
// taxi_1.getLocation()
let currentLocation = taxi_1.location;
taxi_1.location = { x: 2, y: 5 };
