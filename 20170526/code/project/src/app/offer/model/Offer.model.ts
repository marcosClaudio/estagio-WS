export class Offer {
  private name?: string;
  private initialDate?: number;
  private endDate?: number;
  constructor(
    name?: string,
    initialDate?: number,
    endDate?: number,
  ) {
    this.name = name ? name: null;
    this.initialDate = initialDate ? initialDate: null;
    this.endDate = endDate ? endDate: null;
  }
}