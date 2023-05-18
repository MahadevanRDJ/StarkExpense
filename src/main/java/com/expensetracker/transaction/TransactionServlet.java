package com.expensetracker.transaction;

import java.io.IOException;
import java.io.PrintWriter;
import java.time.LocalDate;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.expensetracker.util.DBUtils;

/**
 * Servlet implementation class TransactionServlet
 */
@WebServlet("/home")
public class TransactionServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public TransactionServlet() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		RequestDispatcher requestDispatcher = request.getRequestDispatcher("view/Transaction.jsp");
		requestDispatcher.forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String categoryName = request.getParameter("category");
		String type = request.getParameter("type");
		double amount = Double.parseDouble((request.getParameter("amount")));
		int category = categoryName.equalsIgnoreCase("expenses") ? 1
				: categoryName.equalsIgnoreCase("debts") ? 2
						: categoryName.equalsIgnoreCase("income") ? 101 : 0;
		PrintWriter out = response.getWriter();
		response.setContentType("text/plain");
		response.setCharacterEncoding("UTF-8");
		if (DBUtils.addTransactions(category, type, LocalDate.now(), amount)) {
			out.println("Transaction added Successfully");
		} else {
			out.println("Added failed");
		}
	}
}
