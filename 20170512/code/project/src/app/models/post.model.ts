export class Post{
  public userId?: number;
  public id?: number;
  public title?: string;
  public body?: string;
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