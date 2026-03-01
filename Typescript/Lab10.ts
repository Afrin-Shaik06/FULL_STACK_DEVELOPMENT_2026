class Student {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    display() : void {
        console.log(this.name);
    }
}
let s1 = new Student("Kiran");
s1.display();