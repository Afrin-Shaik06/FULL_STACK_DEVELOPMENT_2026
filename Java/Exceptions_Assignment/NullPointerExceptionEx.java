package Exceptions_Assignment;

import java.util.Scanner;

public class NullPointerExceptionEx {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        try {
            System.out.print("Enter your name (type 'null' to simulate error): ");
            String name = sc.nextLine();

            if (name.equals("null")) {
                name = null;   // Intentionally making it null
            }

            System.out.println("Length of name: " + name.length());
        } catch (NullPointerException e) {
            System.out.println("Error: Cannot perform operation on a null object.");
        }

        System.out.println("Program continues after handling exception.");
        sc.close();
    }
}

