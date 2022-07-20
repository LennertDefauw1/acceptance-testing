import {IUser, UserCreator} from "../src/userCreator";
import {UserService} from "../src/userService";
import {UserRepository} from "../src/userRepository";
import axios from 'axios';


jest.mock('../src/userService');

beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
});

describe('User Integration',  () => {
    test('UserService getUsers returns 1 user', async () => {
        // const creator = new UserCreator();
        //
        // const user: IUser = creator.withFirstName('Lennert')
        //     .withLastName('Defauw')
        //     .create();
        //
        //
        // const userRepository : UserRepository = new UserRepository();
        // const userService : UserService = new UserService(userRepository)

        const users = [{name: 'Bob'}];
        const resp = {data: users};

        // const r = await userService.addUser(user)

        // expect((await userService.getUsers()).length == 2)

    })

    test('UserService inserting an existing user throws an error', async () => {
        throw new Error("TODO");
    })
})
