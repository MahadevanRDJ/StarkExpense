package com.expensetracker.login;

import java.io.IOException;
import java.io.PrintWriter;
  
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.expensetracker.model.User;
import com.expensetracker.model.Wallet;
import com.expensetracker.util.DBUtils;

@WebServlet("/login")
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void service(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		if (request.getMethod().equalsIgnoreCase("get")) {
			doGet(request, response);
		} else if (request.getMethod().equalsIgnoreCase("post")) {
			doPost(request, response);
		}
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		RequestDispatcher requestDispatcher = this.getServletContext().getRequestDispatcher("/view/Login.jsp");
		requestDispatcher.forward(request, response);

	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String name = request.getParameter("name").trim();
		String password = request.getParameter("password").trim();
		HttpSession session = request.getSession();
		User user = DBUtils.userLogin(name, password);
		PrintWriter out = response.getWriter();
		if (user != null) {
			session.setAttribute("name", name);
			session.setMaxInactiveInterval(0);
			Cookie userCookie = new Cookie("userName", name);
			userCookie.setMaxAge(24 * 3600);
			response.addCookie(userCookie);
			if (!user.isWalletInitialized()) {
				response.sendRedirect(request.getContextPath() + "/wallet");
			} else {
				Wallet wallet = DBUtils.getWallet();
				session.setAttribute("wallet", wallet);
			}
		} else {
			out.println("Failure");
		}
	}
}