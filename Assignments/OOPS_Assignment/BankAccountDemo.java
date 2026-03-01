package OOPS_Assignment;

import java.util.Scanner;

class BankAccount {
    private String accountNumber;
    private int balance;

    public void setAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
    }

    public void setBalance(int balance) {
        if (balance >= 0) {
            this.balance = balance;
        } else {
            System.out.println("Balance cannot be negative.");
        }
    }

    public String getAccountNumber() {
        return accountNumber;
    }

    public int getBalance() {
        return balance;
    }
}

public class BankAccountDemo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String accNo = sc.next();
        int balance = sc.nextInt();

        BankAccount account = new BankAccount();
        account.setAccountNumber(accNo);
        account.setBalance(balance);

        System.out.println("Account Number: " + account.getAccountNumber());
        System.out.println("Balance: " + account.getBalance());

        sc.close();
    }
}