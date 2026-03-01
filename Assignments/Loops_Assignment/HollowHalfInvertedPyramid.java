package Loops_Assignment;

import java.util.*;

public class HollowHalfInvertedPyramid {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();

        for (int i = N; i >= 1; i--) {
            for (int j = 1; j <= i; j++) {
                if (i == N || j == 1 || j == i) {
                    System.out.print("* ");
                } else {
                    System.out.print("  ");
                }
            }
            System.out.println();
        }

        sc.close();
    }
}