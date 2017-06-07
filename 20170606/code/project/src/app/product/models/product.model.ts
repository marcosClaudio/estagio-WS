export class Product {
  private name?: string;
  private price?: number;
  constructor(
    name?: string,
    price?: number
  ) {
    this.name = name ? name: null;
    this.price = price ? price: null;
  }
}