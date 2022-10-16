import { UserRepository, UserRepository } from "../../repositories/UserRepository"
import { CreateUseCase } from "./CreateUserUseCase"
import { CreateUserControler } from "./CreateUseControle"

const UserRepository = UserRepository.getInstance();

const CreateUserUseCase = new CreateUseCase(UserRepository);

const CreateUseControle = new CreateUserControler(CreateUserUseCase);

export {CreateUserControler}