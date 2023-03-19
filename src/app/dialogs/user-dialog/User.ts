export class User {
    firstName: string = '';
    lastName: string = '';

    public constructor(init?: Partial<User>) {
        Object.assign(this, init);
    }
}