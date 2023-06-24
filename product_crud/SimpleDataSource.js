"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleDataSource = void 0;
var Product_1 = require("./Product");
var SimpleDataSource = /** @class */ (function () {
    function SimpleDataSource() {
        this.products = new Array(new Product_1.Product(1, "Iphone X", "Phone", 1232), new Product_1.Product(2, "Iphone 33", "Phone", 23232), new Product_1.Product(3, "Iphone 3", "Phone", 34232), new Product_1.Product(4, "Iphone 21", "Phone", 52332));
    }
    SimpleDataSource.prototype.getProducts = function () {
        return this.products;
    };
    return SimpleDataSource;
}());
exports.SimpleDataSource = SimpleDataSource;
var p = new SimpleDataSource();
