package com.expensetracker.login;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.expensetracker.model.User;
import com.expensetracker.util.DBUtils;
import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * Servlet implementation class UserServlet
 */
@WebServlet("/userprofile")
public class UserServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public UserServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		User user = DBUtils.getUser();
		System.out.println(user);
		request.getSession().setAttribute("UserProfile", user);
		ObjectMapper objectMapper = new ObjectMapper();
		String userObject = objectMapper.writeValueAsString(user);
		response.getWriter().println(userObject);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
