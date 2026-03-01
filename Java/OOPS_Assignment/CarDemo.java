package OOPS_Assignment;

import java.util.Scanner;

class Car {
    String brand;
    String model;
    int year;

    void display() {
        System.out.println("Brand: " + brand);
        System.out.println("Model: " + model);
        System.out.println("Year: " + year);
    }
}

public class CarDemo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String brand = sc.next();
        String model = sc.next();
        int year = sc.nextInt();

        Car car = new Car();
        car.brand = brand;
        car.model = model;
        car.year = year;

        car.display();

        sc.close();
    }
}