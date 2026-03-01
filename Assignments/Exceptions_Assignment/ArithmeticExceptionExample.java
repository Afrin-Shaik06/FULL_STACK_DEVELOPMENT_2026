package Exceptions_Assignment;

import java.util.Scanner;

public class ArithmeticExceptionExample {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        try {
            System.out.print("Enter numerator: ");
            int numerator = sc.nextInt();

            System.out.print("Enter denominator: ");
            int denominator = sc.nextInt();

            int result = numerator / denominator;

            System.out.println("Result: " + result);
        } catch (ArithmeticException e) {
            System.out.println("Error: Division by zero is not allowed.");
        }

        System.out.println("Program continues after handling exception.");
        sc.close();
    }
}