import {IUser, UserCreator} from "../src/userCreator";

describe('User', () => {
    test('UserCreator implements functions', () => {
        expect(typeof (UserCreator as any).withFirstName).toBe("function");
        expect(typeof (UserCreator as any).withLastName).toBe("function");
        expect(typeof (UserCreator as any).create).toBe("function");
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