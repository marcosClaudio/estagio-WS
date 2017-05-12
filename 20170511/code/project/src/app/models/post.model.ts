export class Post{
  private userId?: number;
  private id?: number;
  private title?: string;
  private body?: string;
  constructor(
    userId?: number,
    id?: number,
    title?: string,
    body?: string
  ){
    this.userId = userId ? userId : null;
    this.id = id ? id : null;
    this.title = title ? title : null;
    this.body = body ? body : null;
  }
}