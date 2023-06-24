import { Product } from "./Product";

export class SimpleDataSource {
  private products: Array<Product>;

  constructor() {
    this.products = new Array<Product>(
      new Product(1, "Iphone X", "Phone", 1232),
      new Product(2, "Iphone 33", "Phone", 23232),
      new Product(3, "Iphone 3", "Phone", 34232),
      new Product(4, "Iphone 21", "Phone", 52332)
    );
  }

  getProducts(): Product[] {
    return this.products;
  }
}

let p = new SimpleDataSource();
