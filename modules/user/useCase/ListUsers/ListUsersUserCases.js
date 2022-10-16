import { UserRepository } from "../../repositories/UserRepository";

export class ListUsersUserCases{
cosntructor (){
    this.usersRepository = UserRepository.getinstance();

}

async execute(){
    const users = this.usersRepository.list();

    return users
}
}