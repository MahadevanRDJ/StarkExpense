<!DOCTYPE html>
<html>
  <head>
    <meta charset="ISO-8859-1" />
    <title>Stark</title>
    <link
      rel="stylesheet"
      href="${pageContext.request.servletContext.contextPath}/css/login.css"
    />
    <link
      rel="icon"
      type="image/x-icon"
      href="${pageContext.request.servletContext.contextPath}/view/ironman.png"
    />
  </head>
  <body>
    <!-- <form action="login" method="post"> -->
      <div class="login">
        <div class="login-fields">
          <input
            type="text"
            class="login-attr login-username"
            name="name"
            placeholder="Username"
            onkeyup="checkUserName()"
            required
          />
        </div>
        <div class="login-fields">
          <input
            type="password"
            name="password"
            class="login-attr login-password"
            placeholder="Password"
            onkeyup="checkPassWord()"
            required
          />
        </div>
        <div class="login-fields">
          <button type="submit" class="login-btn" onclick="login()">Log in</button>
        </div>
        <div class="login-fields">
          <label for="create_account"> Don't have an account? </label>
          <a href="register" class="register_link"> Sign up</a>
        </div>
      </div>
    <!-- </form> -->
    <script src="${pageContext.request.servletContext.contextPath}/js/login.js"></script>
  </body>
</html>
