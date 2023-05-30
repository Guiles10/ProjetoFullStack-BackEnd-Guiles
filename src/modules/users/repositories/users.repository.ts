import { CreateUserDto } from "../dto/create-user.dto";
import { User } from "../entities/user.entity";
import { UpdateUserDto } from "../dto/update-user.dto";

//se comprota como uma Interface também
export abstract class UsersRepository {
    abstract create(data: CreateUserDto): Promise<User> | User;
    abstract findAll(): Promise<any> | User[];
    abstract findByEmail(email: string): Promise<User> | User;

    abstract findOne(id: string): Promise<User> | User;
    abstract update(id: string, data: UpdateUserDto): Promise<User> | User;
    abstract delete(id: string): Promise<void> | void; 
}

