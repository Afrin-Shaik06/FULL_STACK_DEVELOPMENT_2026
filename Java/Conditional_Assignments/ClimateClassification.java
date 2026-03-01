package Conditional_Assignments;

import java.util.Scanner;

public class ClimateClassification {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();

        while (T-- > 0) {
            int C = sc.nextInt();

            if (C > 20) {
                System.out.println("HOT");
            } else {
                System.out.println("COLD");
            }
        }
        sc.close();
    }
}