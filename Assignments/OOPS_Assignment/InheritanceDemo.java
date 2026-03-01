package OOPS_Assignment;

class Animal {
    void make_sound() {
        System.out.println("Animal makes sound");
    }
}

class Dog extends Animal {
    @Override
    void make_sound() {
        System.out.println("Bark");
    }
}

public class InheritanceDemo {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.make_sound();
    }
}