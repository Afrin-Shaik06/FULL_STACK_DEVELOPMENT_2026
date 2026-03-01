package ArrayAssignments;

import java.util.Scanner;

public class FrequencyOfNumbers {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();
        int[] arr = new int[N];
        int[] freq = new int[N + 1];

        for (int i = 0; i < N; i++) {
            arr[i] = sc.nextInt();
            freq[arr[i]]++;
        }

        for (int i = 1; i <= N; i++) {
            System.out.println(i + ": " + freq[i]);
        }

        sc.close();
        
    }
}