export interface IUser {
    firstName: string;
    lastName: string;
    email: string;
}

export class UserCreator {
    private firstName;
    private lastName;
    private email = 'john.doe@jimber.org';

    withFirstName(firstName: string): UserCreator {
        const re = new RegExp("[^A-Za-z0-9]");
        const isNotValid = re.test(firstName)

        if (isNotValid) {
            throw Error("Not a valid FirstName")
        }

        this.firstName = firstName;
        return this;
    };

    withLastName(lastName: string): UserCreator {
        const re = new RegExp("[^A-Za-z0-9]");
        const isNotValid = re.test(lastName)

        if (isNotValid) {
            throw Error("Not a valid LastName")
        }

        this.lastName = lastName;
        return this;
    }

    create(): IUser {
        if (!this.firstName || !this.lastName) {
            throw Error("FirstName and LastName are required")
        }

        return {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email
        }
    }
}
