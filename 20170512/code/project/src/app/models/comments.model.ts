export class comment {
    private postId?: number;
    private id?: number;
    private name?: string;
    private email?: string;
    private body?: string;
    constructor(
        postId?: number,
        id?: number,
        name?: string,
        email?: string,
        body?: string
    ){
        this.postId = postId ? postId : null;
        this.id = id ? id : null;
        this.name = name ? name : null;
        this.email = email ? email : null;
        this.body = body ? body : null;
    }
}