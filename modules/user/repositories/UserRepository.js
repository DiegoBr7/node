import { User } from "../models/user";

export class UserRepository {
    users;

    static INSTANCE;

    constructor(){
        this.users = [];
    }

     static getinstance(){
        if(!UserRepository.INSTANCE){
         UserRepository.INSTANCE = new UserRepository
        }
        return UserRepository/this.INSTANCE;
     }

    create({name,username,email,password}){

        const user = new user();

        Object.assign(user, {
            name,
            username,
            email,
            password,
            create_at: new Date(),
        });


        this.users.push(user);
        return user
        
    }

    list(){
        return this.users
    }
}