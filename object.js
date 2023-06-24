// class yapisi bize bir obje uretmek icin gerekli olan yapiyi sunuyor.
var Taxi = /** @class */ (function () {
    function Taxi() {
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("taksi X :".concat(point.x, " undan Y: ").concat(point.y, " konumuna"));
    };
    return Taxi;
}());
var Bus = /** @class */ (function () {
    function Bus() {
    }
    Bus.prototype.travelTo = function (point) {
        console.log("Bus X :".concat(point.x, " undan Y: ").concat(point.y, " konumuna"));
    };
    return Bus;
}());
var taxi_1 = new Taxi();
taxi_1.currentLocation = { x: 2, y: 5 };
taxi_1.travelTo({ x: 1, y: 2 });
console.log(taxi_1.currentLocation.x);
console.log(taxi_1.currentLocation.y);
var taxi_2 = new Taxi();
taxi_2.travelTo({ x: 5, y: 6 });
taxi_2.currentLocation = { x: 44, y: 5213 };
console.log(taxi_2.currentLocation.x);
console.log(taxi_2.currentLocation.y);
