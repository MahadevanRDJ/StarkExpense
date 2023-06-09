package com.expensetracker.wallet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.expensetracker.model.Wallet;
import com.expensetracker.util.DBUtils;
import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * Servlet implementation class WalletDisplay
 */
@WebServlet("/walletDisplay")
public class WalletDisplay extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public WalletDisplay() {
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
		Wallet wallet = DBUtils.getWallet();
		PrintWriter out = response.getWriter();
		HttpSession session = request.getSession();
		session.setAttribute("wallet", wallet);
		ObjectMapper json = new ObjectMapper();
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		out.println(json.writeValueAsString(wallet));
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
