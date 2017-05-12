import { Address } from './address.model';

export class Author{
	private id?: number; 
	private name?: string;
	private username?: string;
	private email?: string;
	private address?: Address;
	constructor(
		id?: number,
		name?: string,
		username?: string,
		email?: string,
		address?: Address
	){
		this.id = id ? id : null;
		this.name = name ? name : null;
		this.username = username ? username : null;
		this.email = email ? email : null;
		this.address = address ? address : null;
	}
}