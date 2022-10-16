import { UserRepository } from "../../repositories/UserRepository";

export class CreateUseCase {
    constructor (){

    }

    execute(){
        //Nao posso ter o mesmo username q o usuario
        //Nao posso ter o mesmo email q o usuario

        this.usersRepository = UserRepository.getinstance();

        const user = this.UserRepository.create({name , username , email , password});

        return user
    }
}