package OOPS_Assignment;

import java.util.Scanner;

class Shape {
    double area() {
        return 0;
    }
}

class Circle extends Shape {
    int radius;

    Circle(int radius) {
        this.radius = radius;
    }

    @Override
    double area() {
        return 3.14 * radius * radius;
    }
}

class Rectangle extends Shape {
    int length, width;

    Rectangle(int length, int width) {
        this.length = length;
        this.width = width;
    }

    @Override
    double area() {
        return length * width;
    }
}

public class ShapeDemo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        sc.next(); // skip "Circle"
        int radius = sc.nextInt();
        Circle circle = new Circle(radius);
        System.out.println("Area of Circle: " + circle.area());

        sc.next(); // skip "Rectangle"
        int length = sc.nextInt();
        int width = sc.nextInt();
        Rectangle rectangle = new Rectangle(length, width);
        System.out.println("Area of Rectangle: " + rectangle.area());

        sc.close();
    }

}