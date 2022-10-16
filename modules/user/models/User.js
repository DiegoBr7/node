import {v4 as uuidV4} from "uuid"


export class User {
    id;
    name;
    userName;
    password;
    created_at;

    constructor(){
        if (!this.id){
            this.id = uuidV4();
        }
    }
}

const data = new User();

console.log(data);