package com.expensetracker.login;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.expensetracker.util.DBUtils;

/**
 * Servlet implementation class Registration
 */
@WebServlet("/register")
public class RegistrationServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */

	protected void service(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		if (request.getMethod().equalsIgnoreCase("get")) {
			doGet(request, response);
		} else if (request.getMethod().equalsIgnoreCase("post")) {
			doPost(request, response);
		} else {
			doPut(request, response);
		}
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		RequestDispatcher dispatcher = request.getRequestDispatcher("view/Register.jsp");
		dispatcher.forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String firstName = request.getParameter("firstname");
		String lastName = request.getParameter("lastname");
		String userName = request.getParameter("username");
		String passWord = request.getParameter("password");
		PrintWriter out = response.getWriter();
		if (DBUtils.addUser(firstName, lastName, userName, passWord)) {
			out.println("Success");
		} else {
			out.println("Failure");
		}
	}

	protected void doPut(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String userName = request.getParameter("username");
		String lastName = request.getParameter("lastname");
		String firstName = request.getParameter("firstname");
		System.out.println(userName+ lastName+ firstName);
		PrintWriter out = response.getWriter();  
		if (validate(lastName, firstName, userName) ) {
			if (DBUtils.updateUser(userName, lastName, firstName)) {
				out.println("Profile Updated successfully");
			}
		} else {
			out.println("Error occured while updating.");
		}
	}

	private boolean validate(String lastName, String firstName, String userName) {
		return userName != null && firstName !=null && lastName != null;
	}
}