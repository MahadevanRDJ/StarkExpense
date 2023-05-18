package com.expensetracker.model;

import java.math.BigDecimal;
import java.sql.ResultSet;
import java.sql.SQLException;

public class Wallet {
    private int walletId;
    private String walletName;
    private BigDecimal amount;

    public int getWalletId() {
        return walletId;
    }

    public void setWalletId(int walletId) {
        this.walletId = walletId;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

    public Wallet(ResultSet resultSet) throws SQLException {
        this.walletId = resultSet.getInt(1);
        this.walletName = resultSet.getString(2);
        this.amount = resultSet.getBigDecimal(4);

    }

    public String getWalletName() {
        return walletName;
    }

    public void setWalletName(String walletName) {
        this.walletName = walletName;
    }

    @Override
    public String toString() {
        return "Wallet [walletId=" + walletId + ", walletName=" + walletName + ", amount=" + amount + "]";
    }
}
