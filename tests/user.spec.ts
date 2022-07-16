import {IUser, UserCreator} from "../src/userCreator";

describe('User', () => {
    test('UserCreator implements functions', () => {
        const creator = new UserCreator();
        expect((creator as any).withFirstName).toBeDefined();
        expect((creator as any).withLastName).toBeDefined();
        expect((creator as any).create).toBeDefined();
    })

    test('UserCreator creates user', () => {
        const userCreator: any = new UserCreator();
        userCreator
            .withFirstName("John")
            .withLastName("Doe");

        const user: IUser = userCreator.create();
        expect(user.firstName).toEqual("John");
        expect(user.lastName).toEqual("Doe");
        expect(user.email).toEqual("john.doe@jimber.org");
    })

    test('UserCreator should have valid names', () => {
        const userCreator: any = new UserCreator();
        expect(() => userCreator.withFirstName(";./")).toThrowError("Not a valid FirstName")
        expect(() => userCreator.withLastName(";./")).toThrowError("Not a valid LastName")
        expect(() => userCreator.create()).toThrowError("FirstName and LastName are required")
    })
})
