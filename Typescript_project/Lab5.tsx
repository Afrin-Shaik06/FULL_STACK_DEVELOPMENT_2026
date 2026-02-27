function GreetUser() {
    const name: string = "john";
    const title: string = "Dr.";

    return <h2>Hello, {title} {name}!</h2>
}

export default GreetUser;