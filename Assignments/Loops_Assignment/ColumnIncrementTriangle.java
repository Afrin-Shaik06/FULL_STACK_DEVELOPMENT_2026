package Loops_Assignment;

import java.util.*;

public class ColumnIncrementTriangle {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();

        for (int i = 1; i <= N; i++) {
            int num = i;
            for (int j = 1; j <= i; j++) {
                System.out.print(num + " ");
                num += (N - j);
            }
            System.out.println();
        }

        sc.close();
    }
}