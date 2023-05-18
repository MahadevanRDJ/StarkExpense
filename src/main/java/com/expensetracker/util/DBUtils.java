package com.expensetracker.util;

import java.time.LocalDate;
import java.util.List;

import com.expensetracker.model.Transactions;
import com.expensetracker.model.User;
import com.expensetracker.model.Wallet;
import com.expensetracker.repository.ExpenseTrackerRepository;

public class DBUtils {

    static {
        ExpenseTrackerRepository.getInstance();
    }

    public static boolean addUser(String firstName, String lastName, String userName, String password) {
        return ExpenseTrackerRepository.getInstance().addUser(firstName, lastName, userName, password);
    }

    public static User userLogin(String name, String password) {
        return ExpenseTrackerRepository.getInstance().userLogin(name, password);
    }

    public static void initiateWallet(String walletName, double amount) {
        ExpenseTrackerRepository.getInstance().initiateWallet(walletName, amount);
    }

    public static Wallet getWallet() {
        return ExpenseTrackerRepository.getInstance().getWallet();
    }

    public static boolean checkUserName(String userName) {
        return ExpenseTrackerRepository.getInstance().checkUserName(userName);
    }

    public static boolean resetPassword(String userName, String password) {
        return ExpenseTrackerRepository.getInstance().resetPassword(userName, password);
    }

    public static boolean removeWallet() {
        return ExpenseTrackerRepository.getInstance().removeWallet();
    }

    public static String getExpense(int expense) {
        return ExpenseTrackerRepository.getInstance().getExpense(expense);
    }

    public static String getIncome(int income) {
        return ExpenseTrackerRepository.getInstance().getIncome(income);
    }

    public static String getDebt(int debt) {
        return ExpenseTrackerRepository.getInstance().getDebt(debt);
    }

    public static boolean addTransactions(int identifier, String type, LocalDate transactionDate, double amount) {
        return ExpenseTrackerRepository.getInstance().addTransactions(identifier, type, transactionDate, amount);
    }

    public static List<Transactions> getTransactions() {
        return ExpenseTrackerRepository.getInstance().getTransactions();
    }

    public static boolean removeTransaction(int transaction_id) {
        return ExpenseTrackerRepository.getInstance().removeTransaction(transaction_id);
    }

    public static User getUser() {
        return ExpenseTrackerRepository.getInstance().getUser();
    }

    public static boolean updateUser(String userName, String lastName, String firstName) {
        return ExpenseTrackerRepository.getInstance().updateUser(firstName, lastName, userName);
    }
}
