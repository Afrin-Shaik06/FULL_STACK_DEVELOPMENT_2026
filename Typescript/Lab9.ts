interface User {
    id: number;
    email?: string;
}
    let user1: User = { id: 10 };
    let user2: User = { id: 11, email: "test@gmail.com" };

    console.log(user1, user2);