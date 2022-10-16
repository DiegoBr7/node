import { throws } from "assert";
import { response } from "express";
import { UserRepository } from "../../repositories/UserRepository";
import { CreateUseCase } from "./CreateUserUseCase";


export class CreateUserControler{
    constructor (){
        this.CreateUseCase = new CreateUseCase() ;

    };

    handle(request  , response){
       const {name , username , email ,password } = request.body;
       
      
       
       const user = this.CreateUseCase.execute({
        name,
        username,
        email,
        password,
       })
       
       return response.json(user)
    }
}