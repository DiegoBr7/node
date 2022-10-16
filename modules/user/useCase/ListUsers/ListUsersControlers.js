export class ListUsersControlers {
    constructor(){
        this.ListUseUseCases = new this.ListUseUseCases();
    }

    handle(request,response){
  const users = this.ListUseUseCases.execute();

  return response.json(users)
    }
}