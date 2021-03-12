package com.revature.app.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.app.beans.User;
import com.revature.app.services.UserService;

/*
 * GET user/login user logs in
 * POST user/register register a user
 */
@RestController
//@CrossOrigin(origins="http://localhost:4200", allowCredentials="true")
@RequestMapping(path = "/user")
public class UserController {
	private UserService userServ;
	private BCryptPasswordEncoder bCryptPasswordEncoder;

	@Autowired
	public UserController(UserService userServ) {
		this.userServ = userServ;
		this.bCryptPasswordEncoder = new BCryptPasswordEncoder();
	}

	@PostMapping("/register")
	@Transactional
	public void register(HttpSession session, @RequestBody User user) {
		user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
		userServ.addUser(user);
		login(session, user);
	}

	@PostMapping("/login")
	public ResponseEntity<User> login(HttpSession session, @RequestBody User user) {
		String username = user.getUsername();
		String password = user.getPassword();

		User attemptedLogin = userServ.getUserByUsername(username);
		if (attemptedLogin != null) {
			if (bCryptPasswordEncoder.matches(password, attemptedLogin.getPassword())) {
				session.setAttribute("user", attemptedLogin);
				return ResponseEntity.ok(attemptedLogin);
			} return ResponseEntity.badRequest().build();
		}
		return ResponseEntity.notFound().build();
	}
}
