var Taxi = /** @class */ (function () {
    function Taxi(_location, _color) {
        this._location = _location;
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("taksi X :".concat(this._location.x, " undan Y: ").concat(this._location.y, " konumuna"));
    };
    Object.defineProperty(Taxi.prototype, "location", {
        get: function () {
            return this._location;
        },
        set: function (value) {
            if (value.x < 0 || value.y < 0) {
                throw new Error("Kordinat bilgileri negatif olamaz");
            }
            this._location = value;
        },
        enumerable: false,
        configurable: true
    });
    return Taxi;
}());
var taxi_1 = new Taxi({ x: 2, y: 5 }, "Blue");
taxi_1.travelTo({ x: 1, y: 2 });
// taxi_1.getLocation()
var currentLocation = taxi_1.location;
taxi_1.location = { x: 2, y: 5 };
