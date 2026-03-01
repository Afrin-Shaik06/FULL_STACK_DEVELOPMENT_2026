package Loops_Assignment;

import java.util.*;

public class HollowRectangle {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int W = sc.nextInt();
        int L = sc.nextInt();

        for (int i = 1; i <= L; i++) {
            for (int j = 1; j <= W; j++) {
                if (i == 1 || i == L || j == 1 || j == W) {
                    System.out.print("*");
                } else {
                    System.out.print(" ");
                }
            }
            System.out.println();
        }

        sc.close();
    }
}