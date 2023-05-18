<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1" />
<title>Stark</title>
<link rel="icon" type="image/x-icon"
	href="${pageContext.request.servletContext.contextPath}/view/ironman.png" />
<link rel="stylesheet"
	href="${pageContext.request.servletContext.contextPath}/css/transaction.css" />
</head>
<body>
	<%
	response.setHeader("Cache-Control", "private,no-cache,no-store");
	if (session.getAttribute("name") == null) {
		response.sendRedirect(request.getContextPath());
	}
	%>
	<div class="container">
		<div class="side-nav">
			<div class="user" onclick="getUserProfile()">
				<div class="user-fields user-img">
					<img
						src="${pageContext.request.servletContext.contextPath}/css/images/icons8-user-64.png" />
				</div>
				<div class="user-fields username">${name}</div>
			</div>

			<div class="items item-1" onclick="goToWallet()">
				<img
					src="${pageContext.request.servletContext.contextPath}/css/images/icons8-wallet-50.png" />
				<div class="items-text">Wallet</div>
			</div>
			<div class="items item-2" onclick="goToTransaction()">
				<img
					src="${pageContext.request.servletContext.contextPath}/css/images/icons8-transaction-50.png" />
				<div class="items-text">Transaction</div>
			</div>
			<div class="items item-3" onclick="transactionHistory()">
				<img
					src="${pageContext.request.servletContext.contextPath}/css/images/icons8-activity-history-50.png" />
				<div class="items-text">History</div>
			</div>
			<div class="items item-4"
				onclick="window.location.href = '/ExpenseTracker/logout'">
				<img
					src="${pageContext.request.servletContext.contextPath}/css/images/icons8-logout-48.png" />
				<div class="items-text">Logout</div>
			</div>
		</div>
		<div class="user-profile">
			<div class="user-profile-content">
				<div class="user-profile-fields profile-dp"></div>
				<div class="user-profile-fields">
					<div class="text-fields">First Name</div>
					<div class="first-name"></div>
				</div>
				<div class="user-profile-fields">
					<div class="text-fields">Last Name</div>
					<div class="last-name"></div>
				</div>
				<div class="user-profile-fields">
					<div class="text-fields">User Name</div>
					<div class="user-name"></div>
				</div>
				<button class="user-profile-fields save-btn" type="button" disabled>Save!</button>
				<div class="user-profile-fields edit-show">**Click on the box
					to edit**</div>
			</div>
		</div>
		<div class="wallet" style="display: none">
			<div class="wallet-content">
				<div class="line line1">
					<div class="wallet-gif">
						<img
							src="${pageContext.request.servletContext.contextPath}/css/images/icons8-wallet.gif" />
					</div>
					<div class="wallet-fields walletName"></div>
				</div>
				<div class="line line2">
					<div class="text-fields">Wallet ID</div>
					<div class="wallet-fields walletID"></div>
				</div>
				<div class="line line3">
					<div class="text-fields">Balance</div>
					<div class="wallet-fields walletAmount"></div>
				</div>
			</div>
		</div>
		<div class="add-transaction" style="display: none">
			<div class="add-transaction-content">
				<div class="add-transaction-fields category">
					<select class="category-fields" id="category-options" required>
						<option value="">--Category--</option>
						<option value="expenses">Expenses</option>
						<option value="debts">Debts</option>
						<option value="income">Income</option>
					</select> <select class="category-fields" id="expenses-options"
						style="display: none" required>
						<option value="">--Expenses--</option>
						<option value="currentbill">Current Bill</option>
						<option value="transportation">Transportation</option>
						<option value="others">Others</option>
					</select> <select class="category-fields" id="debts-options"
						style="display: none" required>
						<option value="">--Debts--</option>
						<option value="borrow">Borrow</option>
						<option value="loan">Loans</option>
						<option value="other">Others</option>
					</select> <select class="category-fields" id="income-options"
						style="display: none" required>
						<option value="">--Income--</option>
						<option value="salary">Salary</option>
						<option value="credited">Credited</option>
						<option value="other">other</option>
					</select>
				</div>

				<div class="add-transaction-fields amount" style="display: none">
					<div class="amount-field">
						<input type="number" name="amount" placeholder="Amount" required />
					</div>
					<div class="add-transaction-fields add">
						<div class="add-image">
							<img
								src="${pageContext.request.servletContext.contextPath}/css/images/icons8-add-50.png" />
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="transaction-history" style="display: none">
			<div class="transaction-history-content">
				<div class="transaction-history-fields transaction-id">ID</div>
				<div class="transaction-history-fields transaction-category">
					Category</div>
				<div class="transaction-history-fields transaction-type">Type</div>
				<div class="transaction-history-fields transaction-date">Date</div>
				<div class="transaction-history-fields transaction-amount">
					Amount</div>
			</div>
		</div>
		<div class="wallet-real-time" style="display: none;">
			<div class="wallet-rt-fields wallet-name"></div>
			<div class="wallet-rt-fields wallet-amount"></div>
		</div>
	</div>

	<script
		src="${pageContext.request.servletContext.contextPath}/js/transaction.js"></script>
</body>
</html>

