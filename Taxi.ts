import { Vehicle } from "./Vehicle";
import { Point } from "./Point";

export class Taxi implements Vehicle {
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
