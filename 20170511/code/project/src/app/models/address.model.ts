export class Address{
    private street?: string;
    private suite?: string;
    private city?: string;
    private zipcode?: number;
    constructor(
        street?: string,
        suite?: string,
        city?: string,
        zipcode?:number
    ){
        this.street = street ? street: null;
        this.suite = suite ? suite: null;
        this.city = city ? city: null;
        this.zipcode = zipcode ? zipcode: null;
    }
}