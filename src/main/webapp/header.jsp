<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="ISO-8859-1" />
    <link rel="stylesheet" href="${pageContext.request.servletContext.contextPath}/css/index.css" />
  </head>
  <body>
    <header class="header">
      <a href="${pageContext.request.servletContext.contextPath}/" class="logo"> <span>STARK</span>EXPENSE </a>

      <nav class="navbar">
        <a class="header-link" href="${pageContext.request.servletContext.contextPath}/login">Login</a>
        <a class="header-link" href="${pageContext.request.servletContext.contextPath}/register">Register</a>
      </nav>
    </header>
  </body>
</html>
