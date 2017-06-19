export class Panphlet {
  private id?: number;
  private initialDate?: string;
  private endDate?: string;
  private panphletUrl?: Array<string>;
  constructor(
    id?: number,
    initialDate?: string,
    endDate?: string,
    panphletUrl?: Array<string>
  ) {
    this.id = id ? id: null;
    this.initialDate = initialDate ? initialDate: null;
    this.endDate = endDate ? endDate: null;
    this.panphletUrl = panphletUrl ? panphletUrl: null;
  }
}