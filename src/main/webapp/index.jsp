<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1" />
<title>Stark</title>
<link rel="icon" type="image/x-icon"
	href="${pageContext.request.servletContext.contextPath}/view/ironman.png" />
<jsp:include page="header.jsp"></jsp:include>
<link rel="stylesheet"
	href="${pageContext.request.servletContext.contextPath}/css/index.css" />
</head>
<body>
	<% if(session.getAttribute("name") != null) {
		response.sendRedirect(request.getContextPath() + "/home");
	}%>
	<div class="stark-expense">Stark Expense management for store your day-to-day expenses</div>
<div class="intro">
		<p class="intro-content">The art of money management is all about
			turning your money into wealth by reframing your mindset; instead of
			thinking of managing money in terms of just expenses, you should also
			think of money as an investment tool. A defined money management plan
			incorporates wealth accumulation, protection of accumulated wealth,
			and preservation of wealth. These key financial concepts are tied to
			your specific needs, objectives, financial goals, priorities, and
			risk factors. In a B2B scenario, businesses often find it hard to
			focus on money management due to varied cash flows. Therefore,
			businesses shift their focus to behavioral influences (spending,
			savings, investments) that affect their decision-making strategies
			for managing their money.</p>
	</div>
 <div class="start-expense">
     <button type="button" onclick= "getStart()"> Start and Store</button>
 </div>
 <script >
	function getStart() {
		window.location.href = "/ExpenseTracker/login";
	}
 </script>
</body>
</html>
