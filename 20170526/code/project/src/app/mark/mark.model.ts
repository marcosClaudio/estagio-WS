export class Mark {
  private name?: string;
  private logo?: string;
  constructor(
    name?: string,
    logo?: string
  ) {
    this.name = name ? name: null;
    this.logo = logo ? logo: null;
  }
}