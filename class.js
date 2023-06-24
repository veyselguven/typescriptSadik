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
