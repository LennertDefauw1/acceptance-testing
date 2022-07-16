import {IUser} from "./userCreator";

export class UserRepository {
    // NO MODIFICATIONS TO THIS FUNCTION!!!!
    async getUsers(): Promise<IUser[]> {
        return []
    }

    // NO MODIFICATIONS TO THIS FUNCTION!!!!
    async exists(user): Promise<boolean> {
        return false;
    }

    // NO MODIFICATIONS TO THIS FUNCTION!!!!
    async insert(user: IUser) {
        return;
    }
}