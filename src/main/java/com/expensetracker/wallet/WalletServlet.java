package com.expensetracker.wallet;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.expensetracker.util.DBUtils;

/**
 * Servlet implementation class WalletView
 */
@WebServlet(urlPatterns = {
		"/wallet"
})
public class WalletServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public void init(ServletConfig config) throws ServletException {
		// TODO Auto-generated method stub
	}

	public void destroy() {
	}

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
		RequestDispatcher dispatcher = request.getRequestDispatcher("view/Wallet.jsp");
		dispatcher.forward(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String walletName = request.getParameter("name");
		double amount = Double.parseDouble(request.getParameter("amount"));
		DBUtils.initiateWallet(walletName, amount);
		response.sendRedirect(request.getContextPath() + "/home");
	}
}
