import java.util.*;

class BankAccount {
    private int balance;

    public BankAccount(int balance) {
        this.balance = balance;
    }

    // Synchronized method to prevent race condition
    public synchronized void withdraw(int amount) {

        System.out.println(Thread.currentThread().getName() +
                " is trying to withdraw " + amount);

        if (amount <= balance) {
            balance -= amount;

            System.out.println("Withdrawal of " + amount +
                    " successful. Remaining balance: " + balance);
        } else {
            System.out.println("Insufficient balance for withdrawal of " + amount);
        }
    }

    public int getBalance() {
        return balance;
    }
}

class UserThread extends Thread {
    private BankAccount account;
    private int amount;

    public UserThread(BankAccount account, int amount, String name) {
        super(name);
        this.account = account;
        this.amount = amount;
    }

    public void run() {
        account.withdraw(amount);
    }
}

public class BankAccountThreadDemo {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter Initial Balance: ");
        int initialBalance = sc.nextInt();

        BankAccount account = new BankAccount(initialBalance);

        System.out.print("Enter number of withdrawals: ");
        int n = sc.nextInt();

        int[] amounts = new int[n];

        // 🔹 Take ALL input first
        for (int i = 0; i < n; i++) {
            System.out.print("Enter withdrawal amount " + (i + 1) + ": ");
            amounts[i] = sc.nextInt();
        }

        UserThread[] threads = new UserThread[n];

        // 🔹 Start threads after input
        for (int i = 0; i < n; i++) {
            threads[i] = new UserThread(account, amounts[i], "User-" + (i + 1));
            threads[i].start();
        }

        // 🔹 Wait for all threads to finish
        for (int i = 0; i < n; i++) {
            try {
                threads[i].join();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }

        System.out.println("Final Balance: " + account.getBalance());

        sc.close();
    }
}