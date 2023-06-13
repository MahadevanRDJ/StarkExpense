package com.expensetracker.login;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.expensetracker.util.DBUtils;

/**
 * Servlet implementation class UpdateProfile
 */
@WebServlet("/updateprofile")
public class UpdateProfile extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public UpdateProfile() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String userName = request.getParameter("username");
		String lastName = request.getParameter("lastname");
		String firstName = request.getParameter("firstname");
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
