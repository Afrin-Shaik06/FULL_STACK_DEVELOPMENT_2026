package ArrayAssignments;

import java.util.Scanner;

public class CountDistinct {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();
        boolean[] visited = new boolean[1000001];
        int count = 0;

        for (int i = 0; i < N; i++) {
            int num = sc.nextInt();
            if (!visited[num]) {
                visited[num] = true;
                count++;
            }
        }

        System.out.println(count);

        sc.close();
    }
}