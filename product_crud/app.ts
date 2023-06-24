import { Product } from "./Product";
import { ProductService } from "./ProductService";

let _productService = new ProductService();

let result;

// result = _productService.getProducts();
result = _productService.getById(2);
let p = new Product();

p.name = "iphone21";
p.price = 1234213245;
p.category = "asdg";

_productService.saveProduct(p);

result = _productService.getProducts();

console.log(result);
