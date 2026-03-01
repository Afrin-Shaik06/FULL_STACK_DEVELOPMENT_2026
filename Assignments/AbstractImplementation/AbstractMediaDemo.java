import java.util.Scanner;

abstract class Media {
    String title;
    String creator;
    int duration;

    Scanner sc = new Scanner(System.in);

    abstract void printDetails();
}

class Book extends Media {
    int pages;

    void printDetails() {
        System.out.println("Entering Book Details...");
        
        System.out.print("Enter Book Title: ");
        title = sc.nextLine();
        
        System.out.print("Enter Author Name: ");
        creator = sc.nextLine();
        
        System.out.print("Enter Number of Pages: ");
        pages = sc.nextInt();
        sc.nextLine();
        
        System.out.println("Book - Title: " + title + 
                           ", Author: " + creator + 
                           ", Pages: " + pages);
    }
}

class Movie extends Media {

    void printDetails() {
        System.out.println("\nEntering Movie Details...");
        
        System.out.print("Enter Movie Title: ");
        title = sc.nextLine();
        
        System.out.print("Enter Director Name: ");
        creator = sc.nextLine();
        
        System.out.print("Enter Duration (in minutes): ");
        duration = sc.nextInt();
        sc.nextLine();
        
        System.out.println("Movie - Title: " + title + 
                           ", Director: " + creator + 
                           ", Duration: " + duration + " mins");
    }
}

class Song extends Media {

    void printDetails() {
        System.out.println("\nEntering Song Details...");
        
        System.out.print("Enter Song Title: ");
        title = sc.nextLine();
        
        System.out.print("Enter Singer Name: ");
        creator = sc.nextLine();
        
        System.out.print("Enter Duration (in minutes): ");
        duration = sc.nextInt();
        sc.nextLine();
        
        System.out.println("Song - Title: " + title + 
                           ", Singer: " + creator + 
                           ", Duration: " + duration + " mins");
    }
}

public class AbstractMediaDemo {
    public static void main(String[] args) {

        Media m;

        m = new Book();
        m.printDetails();

        m = new Movie();
        m.printDetails();

        m = new Song();
        m.printDetails();
    }
}