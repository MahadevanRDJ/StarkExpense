<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1" />
<title>Stark</title>
<link rel="icon" type="image/x-icon"
	href="${pageContext.request.servletContext.contextPath}/view/ironman.png" />
<link rel="stylesheet"
	href="${pageContext.request.servletContext.contextPath}/css/login.css" />
</head>
<body>
	<div class="register">
		<div class="register-fields">
			<input type="text" name="firstname"
				class="register-attr register-firstname" placeholder="Firstname"
				onkeyup="checkFirstName()" required />
		</div>
		<div class="register-fields">
			<input type="text" name="lastname"
				class="register-attr register-lastname" placeholder="Lastname"
				onkeyup="checkLastName()" required />
		</div>
		<div class="register-fields">
			<input type="text" name="username"
				class="register-attr register-username" placeholder="Username"
				onkeyup="checkUserName()" required />
		</div>
		<div class="register-fields">
			<input type="password" name="password"
				class="register-attr register-password" placeholder="Password"
				onkeyup="checkPassWord()" required />
		</div>
		<div class="register-fields">
			<button type="submit" class="register-btn" onclick="register()">Register</button>
		</div>
		<div class="register-fields">
			<label for="existed_account"> Have an account already? </label> <a
				href="${pageContext.request.servletContext.contextPath}/login">Log
				in</a>
		</div>
	</div>
	<script
		src="${pageContext.request.servletContext.contextPath}/js/register.js"></script>
</body>
</html>
