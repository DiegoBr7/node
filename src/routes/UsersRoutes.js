import { Router } from "express";
import { UserRepository } from "../../modules/user/repositories/UserRepository";

import { response, Router } from "express"

const usersRouters = Router();

const createUserControler = new CreateUserControler()

//rota de criação de usuarios
usersRouters.post('/users',(request ,response)=>{
return createUserControler.handler(request,response)
})

//Rota de listagem de usuarios

usersRouters.get("/users",(request,response)=>{
  const usersRepository = new usersRepository();

  const users  = usersRepository.list();

  return response.json(users)
})


export default usersRouters ; 