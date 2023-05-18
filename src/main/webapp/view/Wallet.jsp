<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title>Stark</title>
<link rel="icon" type="image/x-icon"
	href="${pageContext.request.servletContext.contextPath}/view/ironman.png" />
<link rel="stylesheet"
	href="${pageContext.request.servletContext.contextPath}/css/wallet.css" />
</head>

<body>
	<%
	response.setHeader("Cache-Control", "no-cache, no-store,must-revalidate");
	if (session.getAttribute("name") == null) {
		response.sendRedirect(request.getContextPath() + "/");
	}
	%>
	<header>
		<div class="header wallet-header">
			<h3>Wallet</h3>
			<div class="description">A digital wallet refers to software,
				an electronic device, or an online service that enables individuals
				or businesses to make transactions electronically. It stores the
				payment information of users for different payment modes on various
				websites, along with other items such as gift coupons and drivers
				licenses. A digital wallet is also known as an e-wallet.</div>
		</div>
	</header>
	<form action="wallet" method="post">
		<div class="wallet">
			<div class="walletInfo">
				<input type="text" name="name" class="walletfields wallet-name"
					pattern="[a-zA-Z]+" placeholder="Wallet Name" required />
			</div>
			<div class="walletInfo">
				<input type="number" name="amount"
					class="walletfields wallet-amount" placeholder="Amount" required />
			</div>
			<div class="walletInfo">
				<button type="submit" class="transacte">START</button>
			</div>
		</div>
	</form>
</body>
</html>
