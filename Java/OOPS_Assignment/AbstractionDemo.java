package OOPS_Assignment;

abstract class Vehicle {
    abstract void start();
}

class CarVehicle extends Vehicle {
    void start() {
        System.out.println("Car is starting...");
    }
}

class Bike extends Vehicle {
    void start() {
        System.out.println("Bike is starting...");
    }
}

public class AbstractionDemo {
    public static void main(String[] args) {
        Vehicle car = new CarVehicle();
        Vehicle bike = new Bike();

        car.start();
        bike.start();
    }
}