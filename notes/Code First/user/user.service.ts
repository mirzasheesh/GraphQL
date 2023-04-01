export type User = {
    userID: number
    userName: string
    isActive: boolean
}

export class UserService {

    private users: User[] = [
        { userID: 1, userName: "Someone", isActive: false },
        { userID: 2, userName: "Someone else", isActive: false },
        { userID: 3, userName: "Sheesh Mirza", isActive: true }
    ];

    constructor() { }

    getUser(userID: number): User {

        return this.users[userID - 1];
    }

    getUsers(): User[] {

        return this.users;
    }
}