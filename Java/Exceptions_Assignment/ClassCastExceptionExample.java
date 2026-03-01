package Exceptions_Assignment;

public class ClassCastExceptionExample {
    public static void main(String[] args) {

        try {
            Object obj = "Hello World";

            System.out.print("Attempting to cast String to Integer...\n");

            Integer number = (Integer) obj;   // Invalid casting

            System.out.println("Casted value: " + number);
        } catch (ClassCastException e) {
            System.out.println("Error: Invalid type casting. Cannot cast String to Integer.");
        }

        System.out.println("Program continues after handling exception.");
    }
}
