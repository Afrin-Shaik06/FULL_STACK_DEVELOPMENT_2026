package Exceptions_Assignment;

import java.util.Scanner;

public class ArrayIndexOutOfBoundsExample {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int[] numbers = {10, 20, 30, 40, 50};

        try {
            System.out.print("Enter array index (0-4): ");
            int index = sc.nextInt();

            System.out.println("Element at index " + index + " is: " + numbers[index]);
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Error: Invalid array index. Please enter index between 0 and 4.");
        }

        System.out.println("Program continues after handling exception.");
        sc.close();
    }
}