import User from "./User";

export default class Admin extends User {
    constructor(){
        super(this.login, this.password)
    }
}