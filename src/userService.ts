import {UserRepository} from "./userRepository";
import {IUser} from "./userCreator";

export class UserService {
    constructor(private _userRepository: UserRepository) {
    }

    // NO MODIFICATIONS TO THIS FUNCTION!!!!
    getUsers(): Promise<IUser[]> {
        return this._userRepository.getUsers();
    }

    // NO MODIFICATIONS TO THIS FUNCTION!!!!
    async addUser(user: IUser): Promise<void> {
        if(await this._userRepository.exists(user))
            throw new Error("User already exists");

        await this._userRepository.insert(user);
    }
}