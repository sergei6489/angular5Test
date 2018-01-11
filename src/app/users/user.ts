export class User {
    constructor( public picture?: string,
                    public name?:string,
                    public email?:string,
                    public phone?:string,
                    public dob?: Date,
                    public seed?:string  ){}
}
