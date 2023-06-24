// class yapisi bize bir obje uretmek icin gerekli olan yapiyi sunuyor.
var Taxi = /** @class */ (function () {
    function Taxi(location, color) {
        this.currentLocation = location;
        this.color = color;
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("taksi X :".concat(point.x, " undan Y: ").concat(point.y, " konumuna"));
    };
    return Taxi;
}());
var taxi_1 = new Taxi({ x: 2, y: 5 });
taxi_1.travelTo({ x: 1, y: 2 });
console.log(taxi_1.currentLocation);
var taxi_2 = new Taxi({ x: 323, y: 1232 }, "Blue");
var taxi_3 = new Taxi();
console.log(taxi_1);
console.log(taxi_2);
console.log(taxi_3);
